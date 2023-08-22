import { Router } from 'express'
import UsersController from '../Controller/UsersController';

const UsersRouter = Router();

UsersRouter.get('/list', (req, res) => {
    return UsersController.getUsers(req, res)
})

UsersRouter.put('/create', (req, res) => {
    return UsersController.insertUser(req, res)
})

UsersRouter.delete('/delete/:id', (req, res) => {
    return UsersController.deleteUser(req, res)
})

UsersRouter.patch('/update/:id', (req, res) => {
    return UsersController.updateUser(req, res)
})

export default UsersRouter;