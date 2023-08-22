import mongoose from "mongoose";


const WalletSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" || "Store" },
    amount: { type: Number, default: 0 },
}, {
    timestamps: true
})

const Wallet = mongoose.model('Wallet', WalletSchema)

export default Wallet

