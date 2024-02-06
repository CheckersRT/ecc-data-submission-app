import { DbService } from "../../../services/DbService";

export default async function handler(request, response) {
  const { createImage, getImages } = DbService;

  console.log("api request received");

  switch (request.method) {
      case "GET":
        try {
            const images = await getImages()
            response.status(200).json(images)
        } catch (error) {
            console.log("Error from get request", error)
        }
        break;

    case "POST":
      const newData = await createImage(request.body.fileData);
      response.status(201).json(newData);
      break;
  }
  response.status(200).end();
}

export const config = {
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: "40mb", // Set desired value here
    },
  },
};
