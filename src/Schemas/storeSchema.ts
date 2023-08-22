import mongoose from "mongoose";

const StoreSchema = new mongoose.Schema({
    storeName: { type: String },
    storeEmail: { type: String },
    storePassword: { type: String },
    storeDocument: { type: Number, unique: true },
}, {
    timestamps: true
})

const Store = mongoose.model('Store', StoreSchema)

export default Store

