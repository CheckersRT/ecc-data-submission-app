import { DbService } from "../../../services/DbService";

export default async function handler(
    request, response
  ) {
    const { createData } = DbService
  
    switch (request.method) {
    //   case "GET":
    //     res.status(200).json((await getImages()))
    //     break;
  
      case "POST":
        const newData = await createData(request.body.fileData)
        response.status(201).json(newData)
        break;
    }
    response.status(200).end()
  }
  
  export const config = {
    api: {
        bodyParser: {
            sizeLimit: '10mb' // Set desired value here
        }
    }
  }