import { ICreateTransaction } from "../Interfaces/Transactions/create-transaction.interface";
import WalletSchema from "../Schemas/walletSchema";
import mongoose from "mongoose";

const toTransaction = async (transaction: ICreateTransaction) => {
    const payer = transaction.payer;
    const payee = transaction.payee;
    const value = transaction.value;

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const actualValuePayee = await WalletSchema.findOne({ _id: payee }).session(session);
        if (actualValuePayee?.amount !== undefined) {
            const newAmount = actualValuePayee.amount + value;
            await WalletSchema.findByIdAndUpdate(actualValuePayee._id, { amount: newAmount }).session(session);
        }

        const actualValuePayer = await WalletSchema.findOne({ _id: payer }).session(session);
        if (actualValuePayer?.amount !== undefined) {
            const newAmount = actualValuePayer.amount - value;
            await WalletSchema.findByIdAndUpdate(actualValuePayer._id, { amount: newAmount }).session(session);
        }

        await session.commitTransaction();
    } catch (error) {
        console.error("Erro na Transação", error);
        await session.abortTransaction();
    } finally {
        session.endSession();
    }
};

export default toTransaction;