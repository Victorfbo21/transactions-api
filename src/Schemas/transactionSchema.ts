import mongoose, { Schema } from "mongoose";


const TransactionSchema = new mongoose.Schema({
    value: { type: String },
    payer: { type: Schema.Types.ObjectId, ref: "User" },
    payee: { type: Schema.Types.ObjectId, ref: "User" || "Store" },
}, {
    timestamps: true
})

const Transaction = mongoose.model('transaction', TransactionSchema)

export default Transaction

