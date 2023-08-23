import { Router } from "express";
import UsersRouter from "./UsersRoutes";
import StoresRouter from "./StoresRoutes";
import WalletsRouter from "./WalletsRoutes";
import TransactionsRouter from "./TransactionsRoutes";

const Routers = Router();

Routers.use('/user', UsersRouter)
Routers.use('/store', StoresRouter)
Routers.use('/wallet', WalletsRouter)
Routers.use('/transaction', TransactionsRouter)



export default Routers