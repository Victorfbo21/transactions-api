import { Router } from 'express'
import StoresController from '../Controller/StoresController';

const WalletRouter = Router();

WalletRouter.patch('/update', (req, res) => {
    return StoresController.updateStore(req, res)
})

WalletRouter.delete('/delete', (req, res) => {
    return StoresController.deleteStore(req, res)
})

WalletRouter.get('/list', (req, res) => {
    return StoresController.getStores(req, res)
})







export default WalletRouter;