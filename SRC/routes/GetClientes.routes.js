import { Router } from "express";
import { GetClientes } from "../controllers/GetClientes.controllers.js";

const router = Router();

router.get('/GetClientes/', GetClientes);

export default router;