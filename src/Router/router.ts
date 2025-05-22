import { Router } from "express";
import PublicRoutes from "./Routes/publicRoutes";


const router = Router();

const publicRoutes = new PublicRoutes();


publicRoutes.setRoutes(router);

export { router };