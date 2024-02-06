import mongoose, {models} from "mongoose";

const {Schema} = mongoose;

export const imageSchema = new Schema({
    createdAt: {type: Date, default: Date.now},
    originalFilename: String,
    mimetype: String,
    size: Number,
    binaryData: Buffer,
    dataID: {type: Schema.Types.ObjectId, ref: "Image" },
})

export const Image = models.Image || mongoose.model("Image", imageSchema)