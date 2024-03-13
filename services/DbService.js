import connectMongo from "../db/connect";
import { Image } from "../db/models/Image";
import { Data } from "../db/models/Data";
import { createFrontendImageFromDbImage } from "./ImageService";

export const DbService = {
  async getImages() {
    await connectMongo();

    const images = (await Image.find()).map((image) =>
      createFrontendImageFromDbImage(image)
    );
    // const image = (await Image.findById())
    // const imageUrl = [createFrontendImageFromDbImage(image)]

    return images;
  },

  async getImagesById(ids) {
    await connectMongo();

    const imageArray = []

    for (let i = 0; i < ids.length; i++) {
      const image = await Image.findById(ids[i])
      imageArray.push(image)
    }

    return imageArray

  },

  async createImage({ originalFilename, size, mimetype, binaryData, url }) {
    await connectMongo();
    console.log("url in createImage: ", url)
    const newImage = new Image({
      originalFilename,
      size,
      mimetype,
      binaryData,
      url,
    });

    await newImage.save();
    console.log("Image doc saved in Db: ", newImage);
    return newImage;
  },
  async createData({
    type,
    school,
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
  }) {
    console.log("images in creatData: ", images);
    await connectMongo();
    const newData = new Data({
      type,
      school,
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
    });
    await newData.save();
    console.log("Data doc saved in Db: ", newData);
    return newData;
  },
  async updateData(
    id,
    {
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
    }
  ) {
    await connectMongo();
    try {
      await Data.findByIdAndUpdate(id, {
        $set: {
          type: type,
          isOwnArrangement: isOwnArrangement,
          titleOfWork: titleOfWork,
          composerArranger: composerArranger,
          titleOfBook: titleOfBook,
          printPublisher: printPublisher,
          musicPublisher: musicPublisher,
          website: website,
          ISBN: ISBN,
          numCopies: numCopies,
          images: images,
        },
      });
      const updatedDoc = await Data.findById(id)
      console.log("Updated Data doc in db: ", updatedDoc)
      return updatedDoc;
    } catch (error) {
      console.log("Error in updateData DbService: ", error);
    }
  },
  async updateImage(id, url) {
    await connectMongo();
    console.log("URl in updateImage function: ", url)
    try {
      await Image.findByIdAndUpdate(id, {
        $set: {
          url: url,
        },
      });
      const updatedImage = await Image.findById(id)
      console.log("Updated Image doc in db: ", updatedImage)
      return updatedImage;
    } catch (error) {
      console.log("Error in updateImage in DbService: ", error);
    }
  },
};
