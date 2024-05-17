import { Router } from "express";
import { GetProductos } from "../controllers/GetProductos.controllers.js";

const router = Router();

router.get('/GetProductos/', GetProductos);

export default router;