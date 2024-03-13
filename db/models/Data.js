import mongoose, {models} from "mongoose";

const {Schema} = mongoose;

export const dataSchema = new Schema({
    createdAt: {type: Date, default: Date.now},
    school: {type: String, required: true},
    type: {type: String, required: false},
    isOwnArrangement: {type: Boolean, required: false},
    titleOfWork: {type: String, required: false},
    composerArranger: {type: String, required: false},
    titleOfBook: {type: String, required: false},
    printPublisher: {type: String, required: false},
    musicPublisher: {type: String, required: false},
    website: {type: String, required: false},
    ISBN: {type: String, required: false},
    numCopies: {type: Number, required: false}, 
    images: [{type: Schema.Types.ObjectId, ref: "Image" }],
    //reference for the main data upload
})

export const Data = models.Data || mongoose.model("Data", dataSchema)