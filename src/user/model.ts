import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    googleId: String,
    firstName: String,
    lastName: String,
    email: String,
    token: String,
    boards: Array
});

export const User = mongoose.model('User', userSchema);
