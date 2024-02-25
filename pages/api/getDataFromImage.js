import { Formidable } from "formidable";
import fs from "fs";
import callGoogleVisionAPI from "./utils/callGoogleVisionAPI";
import callOpenAIAPI from "./utils/callOpenAIAPI";
import saveDataAndImagesInDb from "./utils/saveDataAndImagesInDb";
import uploadToCloudinary from "./utils/uploadToCloudinary";
import {initialDataDbObject} from "./utils/initialDataDbObject"
import updateDataAndImagesInDb from "./utils/updateDataAndImagesInDb"

export default async function handler(request, response) {
  try {
    const form = new Formidable();

    form.parse(request, (error, fields, files) => {
      if (error) {
        console.error("Error parsing FormData:", error);
        response.status(500).json({ error: "Error parsing FormData" });
        return;
      }
      const image = files.file;

      // Read the file
      fs.readFile(image[0].filepath, async (error, fileContent) => {
        if (error) {
          console.error("Error reading file:", error);
          response.status(500).json({ error: "Error reading file" });
          return;
        }
        // Convert the file content to a base64 string
        const base64string = fileContent.toString("base64");

        try {

          // create image and data doc in database immediately so something is saved
          const initialImageDbObject = createImageDbObject(
            image[0],
            base64string,
          );
          console.log("initalImageDbObject: ", initialImageDbObject)
          // perform initial save in Db, returns a promise which will await later
          const initialDbSavePromise = saveDataAndImagesInDb([initialImageDbObject], initialDataDbObject)


          // upload image strings to Cloudinary async, return promise (don't wait)
          const imageDataPromise = uploadToCloudinary(image[0].filepath);

          // send base64string to google Vision for text extraction
          const extractedText = await callGoogleVisionAPI(base64string);

          if (!extractedText) {
            response.status(500).json({ error: "Error extracting text" });
          }

          // send extracted text to OpenAi to get data from text
          const submissionData = await callOpenAIAPI(extractedText);
          console.log("Submission data: ", submissionData);

          if (!submissionData) {
            response.status(500).json({ error: "Error analysing text" });
          }

          // if uploadToCloudinary is complete...
          const initialDbSave = await initialDbSavePromise
          const imageData = await imageDataPromise;

          const updatedDbSave = await updateDataAndImagesInDb(initialDbSave._id, submissionData, imageData.secure_url)

          if (!updatedDbSave) {
            response
              .status(500)
              .json({ error: "Error saving data in database" });
          }

          response
            .status(200)
            .json({ data: submissionData, doc: updatedDbSave });
        } catch (error) {
          console.error("Error from getDataFromImage route:", error);
          response
            .status(500)
            .json({ error: "Error from getDataFromImage route" });
          return;
        }
      });
    });
  } catch (error) {
    console.error("Error: ", error);
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};

function createImageDbObject(file, base64string) {
  // console.log("Image file in createdb function", file);
  const { originalFilename, size, mimetype } = file;
  return {
    originalFilename,
    size,
    mimetype,
    binaryData: base64string,
    url: "test",
  };
}
