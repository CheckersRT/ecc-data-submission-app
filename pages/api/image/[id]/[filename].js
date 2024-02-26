import connectMongo from "../../../../db/connect";
import { Image } from "../../../../db/models/Image";

export default async function handler(
    request,
    response
) {
    const { id } = request.query

    await connectMongo()

    const image = await Image.findById(id)

    if (!image) {
        return response.status(404).end("Image not found");
    }

    console.log("image in filename: ", image)

    response.setHeader('Content-Type', image.mimetype)
    response.setHeader('Content-Length', image.size)

    response.end(image.binaryData)
}