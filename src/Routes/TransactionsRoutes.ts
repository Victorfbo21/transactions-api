import { Router } from 'express'
import TransactionsController from '../Controller/TransactionsController';

const TransactionsRouter = Router();


TransactionsRouter.put('/create', (req, res) => {
    return TransactionsController.insertTransaction(req, res)
})
TransactionsRouter.patch('/update', (req, res) => {
    return TransactionsController.updateTransaction(req, res)
})

TransactionsRouter.get('/list', (req, res) => {
    return TransactionsController.getTransaction(req, res)
})







export default TransactionsRouter;