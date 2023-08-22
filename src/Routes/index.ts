import { Router } from "express";
import UsersRouter from "./UsersRoutes";
import StoresRouter from "./StoresRoutes";
import WalletRouter from "./WalletRoutes";

const Routers = Router();

Routers.use('/user', UsersRouter)
Routers.use('/store', StoresRouter)
Routers.use('/wallet', StoresRouter)


export default Routers