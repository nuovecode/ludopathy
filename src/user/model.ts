import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    googleId: String,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    boards: Array
});

export const User = mongoose.model('User', userSchema);
