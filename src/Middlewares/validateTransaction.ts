import WalletSchema from "../Schemas/walletSchema"
import { IVerifyFunds } from "../Interfaces/Transactions/verifyFunds.interface"
import StoreSchema from "../Schemas/storeSchema"

const validateTransaction = async (data: IVerifyFunds) => {

    const getOwner = await WalletSchema.findById({ _id: data.payer })
    console.log(getOwner?.owner)
    const verifyIsUser = await StoreSchema.findById({ _id: getOwner?.owner })
    if (verifyIsUser) {
        throw new Error('Apenas usuários podem efeturar transações')
    }

    const verifyFunds = await WalletSchema.findOne({ _id: data.payer })
    if (verifyFunds) {
        if (verifyFunds?.amount >= data.value) {
            return true
        }
        else {
            console.log('Usuário Não possui Fundos')
            return false
        }
    }
    else {
        throw new Error('Erro ao verificar Fundos')
    }


}

export default validateTransaction

