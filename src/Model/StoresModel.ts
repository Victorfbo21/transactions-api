import StoreSchema from "../Schemas/storeSchema";
import encodePassword from "../Utils/encodePassword";
import { ICreateStore } from "../Interfaces/Stores/create-store.interface";

const insertStore = async (store: ICreateStore) => {
    const hashPassword = encodePassword(store.storePassword)
    store.storePassword = hashPassword
    const storeCreated = new StoreSchema({ ...store })
    return await storeCreated.save().then(
        (o) => {
            console.log('Loja Salva com Sucesso !')
            return o
        }

    ).catch(
        (e) => {
            return e
        }
    )
}
const getStores = async (filter: string, skip: number, limit: number) => {
    filter = filter || ''
    return await StoreSchema.find({
        $or: [
            { storeName: new RegExp('.*' + filter + '.*', 'i') },
            { storeEmail: new RegExp('.*' + filter + '.*', 'i') },

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


const deleteStore = async (id: string) => {
    return await StoreSchema.findByIdAndRemove(id).then(
        (o) => {
            return o
        }
    ).catch(
        (e) => {
            console.log('Erro em Deletar Loja')
        }

    )
}

const updateStore = async (id: string, update: Partial<ICreateStore>) => {
    return await StoreSchema.findByIdAndUpdate(id, update)
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


export default {
    insertStore,
    deleteStore,
    updateStore,
    getStores
}