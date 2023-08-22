import { Router } from "express";
import UsersRouter from "./UsersRoutes";

const Routers = Router();

Routers.use('/user', UsersRouter)
