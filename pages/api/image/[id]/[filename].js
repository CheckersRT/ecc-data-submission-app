import connectMongo from "../../../../db/connect";
import { Image } from "../../../../db/models/Image";
import sharp from "sharp"

export default async function handler(
    request,
    response
) {
    const { id } = request.query

    await connectMongo()

    const image = await Image.findById(id)

    const smallImageBuffer = await sharp(image.binaryData)
    .resize({ width: 50 }) // Specify width for resizing
    .toBuffer(); // Convert to buffer

    response.appendHeader('Content-Type', image.mimetype)
    response.appendHeader('Content-Length', image.size)

    response.status(200).send(image.binaryData)
}