import TransactionsModel from '../Model/TransactionsModel';
import { ICreateTransaction } from '../Interfaces/Transactions/create-transaction.interface';

const insertTransaction = async (req: any, res: any) => {
    const transaction = req.body;
    const created = await TransactionsModel.insertTransaction(transaction)
    if (created) {
        res.status(200)
        res.send(created)
    }
    else {
        res.status(500)
    }

}

const getTransaction = async (req: any, res: any) => {
    const find = await TransactionsModel.getTransactions(req.query.filter, req.query.skip, req.query.limit)
    if (find) {
        res.status(200).send(find)
    } else {
        res.status(500)
    }
}

const updateTransaction = async (req: any, res: any) => {
    const id = req.query.id
    const update: Partial<ICreateTransaction> = req.body
    const storeUpdate = await TransactionsModel.updateTransaction(id, update)
    if (storeUpdate) {
        res.status(201)
        res.send(storeUpdate)
    } else {
        res.send(500)
    }
}


export default {
    insertTransaction,
    updateTransaction,
    getTransaction
}
