import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    googleId: { type: String },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    boards: { type: Array },
    turn: { type: Boolean }
});

export const User = mongoose.model('User', userSchema);
