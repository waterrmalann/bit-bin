import mongoose from "mongoose";

const snippetSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true
    },
    uniqueID: {
        type: String,
        required: true,
        index: true,
        unique: true
    }
});

export default mongoose.model("Snippet", snippetSchema);