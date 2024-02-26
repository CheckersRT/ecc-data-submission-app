import { Formidable } from "formidable";
import uploadToCloudinary from "./utils/uploadToCloudinary";
import createImageDbObject from "./utils/createImageDbObject";
import { DbService } from "../../services/DbService";
import fs from "fs/promises";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(request, response) {
  const { createImage } = DbService;
  // Use the uploaded file's name as the asset's public ID and
  // allow overwriting the asset with new versions

  try {
    const form = new Formidable();

    console.log("form: ", form);
    form.parse(request, async (error, fields, files) => {
      if (error) {
        console.error("Error parsing FormData:", error);
        response.status(500).json({ error: "Error parsing FormData" });
        return;
      }

      const images = files.file;

      try {
        const imageSavePromises = images.map(async (image) => {
          console.log("image: ", image.filepath);

          // read filecontent and convert to base64 string
          const fileContent = await fs.readFile(image.filepath);
          // const base64string = fileContent.toString("base64");
          const base64string = "";

          // upload to cloudinary 
          const {secure_url: url} = await uploadToCloudinary(image.filepath)
          console.log("cloudinary url: ", url)

          // create dbobject and return _id
          const imageDbObject = await createImageDbObject(image, base64string, url);
          const { _id } = await createImage(imageDbObject);
          console.log("_id: ", _id);
          return _id;
        });
        // });

        const imageIds = await Promise.all(imageSavePromises);

        console.log("imageIds: ", imageIds);

        if (!imageIds) {
          response.status(500).json({ error: "Error uploading images" });
        }

        // const uploadedImages = await uploadToCloudinary(images);
        // if(!uploadedImages) {
        //   response.status(500).json({error: "Error uploading images"})
        // }

        response.status(200).json({ message: "success", ids: imageIds });
      } catch (error) {
        console.error("Error with image upload: ", error);
      }
    });
  } catch (error) {
    console.error("Error: ", error);
  }
}
