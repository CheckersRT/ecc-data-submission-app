import connectMongo from "../db/connect"
import {Image} from "../db/models/Image"
import {Data} from "../db/models/Data"
import { createFrontendImageFromDbImage } from "./ImageService"

export const DbService = {

    async getImages() {
        await connectMongo()

        const images = (await Image.find()).map(image => createFrontendImageFromDbImage(image))

        return images
    },

    async createImage({ originalFilename, size, mimetype, binaryData}) {
        await connectMongo()
        const newImage = new Image({
            originalFilename,
            size,
            mimetype,
            binaryData
        })

        await newImage.save()
        return createFrontendImageFromDbImage(newImage)
    },
    async createData({type, isOwnArrangement, titleOfWork, composerArranger, titleOfBook, printPublisher, musicPublisher, website, ISBN, numCopies, images}) {
        console.log("images in creatData: ", images)
        await connectMongo();
        const newData = new Data({
            type,
            isOwnArrangement,
            titleOfWork,
            composerArranger,
            titleOfBook,
            printPublisher,
            musicPublisher,
            website,
            ISBN,
            numCopies,
            images,
        })
        await newData.save()
        return newData
    }
}