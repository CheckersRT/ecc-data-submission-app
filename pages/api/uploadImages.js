import { Formidable } from "formidable";
import uploadToCloudinary from "./utils/uploadToCloudinary";

export default async function handler(request, response) {
  // Use the uploaded file's name as the asset's public ID and
  // allow overwriting the asset with new versions
  const form = new Formidable();

  form.parse(request, async (error, fields, files) => {
    if (error) {
      console.error("Error parsing FormData:", error);
      response.status(500).json({ error: "Error parsing FormData" });
      return;
    }

    try {
      const images = files.file;
      const uploadedImages = await uploadToCloudinary(images);
      if(!uploadedImages) {
        response.status(500).json({error: "Error uploading images"})
      }

      const savedImages = await saveImagesToDb(uploadedImages)
      if(!savedImages) {
        response.status(500).json({error: "Error saving images to database"})
      }

      response.status(200)
      
    } catch (error) {
        console.error("Error with image upload: ", error)
    }
  });
}
