import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    gameId: { type: String },
    users: { type: Array }
});

export const Session = mongoose.model('Session', sessionSchema);
