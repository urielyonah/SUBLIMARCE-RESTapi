import { Router } from "express";
import { PostProductoPedido } from "../controllers/PostProductoPedido.controllers.js";

const router = Router();

router.post('/PostProductoPedido/', PostProductoPedido);

export default router;