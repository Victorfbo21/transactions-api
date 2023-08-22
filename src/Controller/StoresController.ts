import StoresModel from '../Model/StoresModel';
import { ICreateStore } from '../Interfaces/Stores/create-store.interface';

const insertStore = async (req: any, res: any) => {
    const store = req.body;
    const created = await StoresModel.insertStore(store)
    if (created) {
        res.status(201).send(created)
    }
    else {
        res.send(500)
    }
}

const getStores = async (req: any, res: any) => {
    const find = await StoresModel.getStores(req.query.filter, req.query.skip, req.query.limit)
    if (find) {
        res.status(200).send(find)
    } else {
        res.status(500)
    }
}

const deleteStore = async (req: any, res: any) => {
    const id = req.query.id
    const storeDeleted = await StoresModel.deleteStore(id)
    if (storeDeleted) {
        res.sendStatus(200)
        res.send('Usuário :', storeDeleted._id, 'Foi Deletado')
    } else {
        res.send(500)
    }
}

const updateStore = async (req: any, res: any) => {
    const id = req.query.id
    const update: Partial<ICreateStore> = req.body
    const storeUpdate = await StoresModel.updateStore(id, update)
    if (storeUpdate) {
        res.status(201)
        res.send(storeUpdate)
    } else {
        res.send(500)
    }
}


export default {
    insertStore,
    deleteStore,
    updateStore,
    getStores
}
