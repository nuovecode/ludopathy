import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
    token: { type: String, required: true, unique: true },
    users: { type: Array, required: true },
    game: { type: Object, required: true }
});

export const Session = mongoose.model('Session', sessionSchema);
