import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    userName: { type: String },
    userEmail: { type: String },
    userPassword: { type: String },
    userDocument: { type: String, unique: true },
}, {
    timestamps: true
})

const User = mongoose.model('User', UserSchema)

export default User

