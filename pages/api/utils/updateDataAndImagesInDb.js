import { Data } from "../../../db/models/Data";
import { Image } from "../../../db/models/Image";
import { DbService } from "../../../services/DbService";

export default async function updateDataAndImagesInDb(
  documentId,
  data,
  imageUrl
) {
    const {updateData, updateImage} = DbService

  try {

    const updatedDoc = await updateData(documentId, data)

    const imagesToUpdate = updatedDoc.images

    console.log("Image url: ", imageUrl )

    const imageUpdatePromises = imagesToUpdate.map(async (image) => {
            const updatedImage = await updateImage(image.toString(), imageUrl)
            return updatedImage
    })

    const updatedImages = await Promise.all(imageUpdatePromises)

    if (!updatedImages) {
        throw new Error("Failed to update images");
    }

    return updatedDoc

  } catch (error) {
    console.log("Error in updateDataAndImagesInDb function: ", error)
  }
}
