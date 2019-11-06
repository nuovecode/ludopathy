import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
    name:  { type: String },
    image: { type: String },
    boxes: { type: Array }
});

export const Board = mongoose.model('Board', boardSchema);
