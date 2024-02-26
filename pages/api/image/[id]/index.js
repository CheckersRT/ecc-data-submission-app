import connectMongo from "../../../../db/connect";
import { Image } from "../../../../db/models/Image";
import { createFrontendImageFromDbImage } from "../../../../services/ImageService";

export default async function handler(
    request,
    response
) {
    const { id } = request.query

    console.log("id in id index: ", id)

    await connectMongo()

    const image = await Image.findById(id)
    const imageObject = createFrontendImageFromDbImage(image)

    response.appendHeader('Content-Type', image.mimetype)
    response.appendHeader('Content-Length', image.size)

    response.status(200).json(imageObject)
}