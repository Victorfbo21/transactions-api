import WalletSchema from "../Schemas/walletSchema"
import { IVerifyFunds } from "../Interfaces/Transactions/verifyFunds.interface"
import StoreSchema from "../Schemas/storeSchema"

const validateTransaction = async (data: IVerifyFunds) => {

    const verifyIsUser = await StoreSchema.findById({ _id: data.payer })
    if (verifyIsUser) {
        throw new Error('Apenas usuários podem efeturar transações')
    }

    const verifyFunds = await WalletSchema.findOne({ owner: data.payer })
    if (verifyFunds)
        if (verifyFunds?.amount >= data.value) {
            return true
        }

}

export default validateTransaction

