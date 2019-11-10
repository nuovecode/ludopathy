import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    name:  { type: String },
    image: { type: String },
    boxes: { type: Array },
    creator: { type: Object }
});

export const Game = mongoose.model('Game', gameSchema);
