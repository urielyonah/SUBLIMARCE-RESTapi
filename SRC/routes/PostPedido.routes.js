import { Router } from "express";
import { PostPedido } from "../controllers/PostPedido.controllers.js";

const router = Router();

router.post('/', PostPedido);

export default router;