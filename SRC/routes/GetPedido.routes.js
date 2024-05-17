import { Router } from "express";
import { GetPedido } from "../controllers/GetPedido.controllers.js";

const router = Router();

router.get('/GetPedido/:userId', GetPedido);

export default router;