import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    name: String,
    squares: Number,
    photo: String
});

export const Game = mongoose.model("Game",gameSchema);
