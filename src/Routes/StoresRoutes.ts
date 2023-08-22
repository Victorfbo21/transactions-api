import { Router } from 'express'
import StoresController from '../Controller/StoresController';

const StoresRouter = Router();


StoresRouter.put('/create', (req, res) => {
    return StoresController.insertStore(req, res)
})
StoresRouter.patch('/update', (req, res) => {
    return StoresController.updateStore(req, res)
})

StoresRouter.delete('/delete', (req, res) => {
    return StoresController.deleteStore(req, res)
})

StoresRouter.get('/list', (req, res) => {
    return StoresController.getStores(req, res)
})







export default StoresRouter;