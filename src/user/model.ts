import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    googleId: { type: String },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    //email: { type: String, required: [true, 'Required field']},
    email: { type: String, required: true },
    password: { type: String, required: true },
    boards: { type: Array }
});

export const User = mongoose.model('User', userSchema);
