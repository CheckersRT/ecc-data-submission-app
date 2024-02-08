import { Formidable } from "formidable";
import fs from "fs";
import callGoogleVisionAPI from "./utils/callGoogleVisionAPI";
import callOpenAIAPI from "./utils/callOpenAIAPI";
import saveDataAndImagesInDb from "./utils/saveDataAndImagesInDb";

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

          // send to google Vision for text extraction
          const extractedText = await callGoogleVisionAPI(base64string);
          
          if(!extractedText) {
            response.status(500).json({error: "Error extracting text"})
          }
          
          // send to OpenAi to get data from text
          const submissionData = await callOpenAIAPI(extractedText);
          console.log("Submission data: ", submissionData);

          if(!submissionData) {
            response.status(500).json({error: "Error analysing text"})
          }
          const imageArray = []

          const imageData = createImageDbObject(image, base64string)
          imageArray.push(imageData)
          console.log("imageData", imageArray)
          //save data and images in database
          const saved = await saveDataAndImagesInDb(imageArray, submissionData)

          if(!saved) {
            response.status(500).json({error: "Error saving data in database"})
          }

          response.status(200).json({data: submissionData})

        } catch (error) {
          console.error("Error calling Google Vision API:", error);
          response
            .status(500)
            .json({ error: "Error calling Google Vision API" });
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
  console.log("Image file in createdb function", file)
  const {originalFilename, size, mimetype} = file[0]
 return {
  originalFilename,
  size,
  mimetype,
  binaryData: base64string,
 }
}