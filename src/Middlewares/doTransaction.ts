import { ICreateTransaction } from "../Interfaces/Transactions/create-transaction.interface";
import WalletSchema from "../Schemas/walletSchema";

const toTransaction = async (transaction: ICreateTransaction) => {

    const payer = transaction.payer; // Origim do Dinheiro
    const payee = transaction.payee; // Quem vai receber
    const value = transaction.value

    const actualValuePayer = await WalletSchema.findOne({ owner: payer })
    if (actualValuePayer?.amount) {
        const newAmout = (actualValuePayer?.amount) - value
        return WalletSchema.findByIdAndUpdate(actualValuePayer._id, { amount: newAmout })
    }

    const actualValuePayee = await WalletSchema.findOne({ owner: payee })
    if (actualValuePayee?.amount) {
        const newAmout = (actualValuePayee.amount) + (value)
        return WalletSchema.findByIdAndUpdate(actualValuePayee._id, { amout: newAmout })
    }

}

export default toTransaction;