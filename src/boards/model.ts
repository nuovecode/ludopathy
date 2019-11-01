import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
    name: String,
    image: String,
    boxes: Array
});

export const Board = mongoose.model('Board', boardSchema);
