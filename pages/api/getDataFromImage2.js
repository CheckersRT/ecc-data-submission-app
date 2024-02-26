import { Formidable } from "formidable";
import fs from "fs";
import callGoogleVisionAPI from "./utils/callGoogleVisionAPI";
import callOpenAIAPI from "./utils/callOpenAIAPI";
import saveDataAndImagesInDb from "./utils/saveDataAndImagesInDb";
import uploadToCloudinary from "./utils/uploadToCloudinary";
import { initialDataDbObject } from "./utils/initialDataDbObject";
import updateDataAndImagesInDb from "./utils/updateDataAndImagesInDb";
import { DbService } from "../../services/DbService";

export default async function handler(request, response) {
  const { createData, getImagesById, updateData } = DbService;
  try {
    const { ids } = request.body;

    console.log("request.body: ", ids);
    // perform initial save of data doc in Db, returns a promise which will await later
    const initialDbSavePromise = createData({
      ...initialDataDbObject,
      images: ids,
    });

    // get images from database
    const images = await getImagesById(ids);

    console.log("images from db: ", images[0].toObject(), images);

    // const base64string = images[0].toObject().binaryData;
  
    // send multiple base64strings to google Vision for text extraction
    const extractedText = await callGoogleVisionAPI(
      images.map((image) => image.url)
    );

    if (!extractedText) {
      response.status(500).json({ error: "Error extracting text" });
    }

    // send extracted text to OpenAi to get data from text
    const submissionData = await callOpenAIAPI(extractedText);
    console.log("Submission data: ", submissionData);

    if (!submissionData) {
      response.status(500).json({ error: "Error analysing text" });
    }

    const initialDbSave = await initialDbSavePromise;

    const updatedDbSave = await updateData(initialDbSave._id, submissionData);

    if (!updatedDbSave) {
      response.status(500).json({ error: "Error saving data in database" });
    }

    response.status(200).json({ data: submissionData, doc: updatedDbSave });
  } catch (error) {
    console.error("Error from getDataFromImage route:", error);
    response.status(500).json({ error: "Error from getDataFromImage route" });
    return;
  }
}

export const config = {
  api: {
    bodyParser: true,
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
