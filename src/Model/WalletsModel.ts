import { ICreateStore } from "../Interfaces/Stores/create-store.interface";
import WalletSchema from "../Schemas/walletSchema";


const updateWallet = async (id: string, update: Partial<ICreateStore>) => {
    return await WalletSchema.findByIdAndUpdate(id, update)
        .then(
            (o) => {
                return o
            }
        ).catch(
            (e) => {
                console.log('Erro em Atualizar Dados da Loja')
            }

        )
}

const getWallet = async (filter: string, skip: number, limit: number) => {
    filter = filter || ''
    return await WalletSchema.find({
        $or: [
            { owner: new RegExp('.*' + filter + '.*', 'i') },

        ]
    }).skip(skip || 0).limit(limit || 0).then(
        (o) => {
            return o
        }
    ).catch(
        (e) => {
            console.log('Erro ao Listar Lojas', e)
            return null
        }
    )
}




export default {
    updateWallet,
    getWallet
}