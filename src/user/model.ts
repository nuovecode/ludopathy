import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Nickname as unique
    password: { type: String, required: true },
    boards: { type: Array, default: [] },
    session: { type: String, default: null },
    invite: { type: String, default: null }
});

export const User = mongoose.model('User', userSchema);
