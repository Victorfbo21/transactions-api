import { Router } from "express";
import UsersRouter from "./UsersRoutes";
import StoresRouter from "./StoresRoutes";
import WalletsRouter from "./WalletsRoutes";
import TransactionsRouter from "./TransactionsRoutes";
import express from 'express';
import swaggerUi from 'swagger-ui-express'
import swaggerFile from "../Docs/swagger.json"

const Routers = Router();

Routers.use('/user', UsersRouter)
Routers.use('/store', StoresRouter)
Routers.use('/wallet', WalletsRouter)
Routers.use('/transaction', TransactionsRouter)
Routers.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


export default Routers