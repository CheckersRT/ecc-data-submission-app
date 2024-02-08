import { DbService } from "../../../services/DbService"

export default async function saveDataAndImagesInDb(images, data) {
    const {createData, createImage} = DbService;

    try {
        // Step 1: Save the images to the images collection
        const imagePromises = images.map(async (imageData) => {
            const { originalFilename, size, mimetype, binaryData } = imageData;
            const newImage = await createImage({ originalFilename, size, mimetype, binaryData });
            return newImage._id; // Return the ID of the saved image
        });

        // Wait for all image creation promises to resolve
        const imageIds = await Promise.all(imagePromises);
        console.log("imageids: ", imageIds)

        // Step 2: Create the data document and include the IDs of the linked images
        const newData = await createData({ ...data, images: imageIds });

        console.log("newData doc: ", newData.images)
        if (!newData) {
            throw new Error("Failed to create data document");
        }

        // Return the newly created data document
        return newData;
    } catch (error) {
        console.error("Error saving data and images:", error);
        return null;
    }
}