import { Router } from "express";
import { DeleteCarrito } from "../controllers/DeleteCarrito.controllers.js";

const router = Router();

router.delete('/:pedidoId', DeleteCarrito);


export default router;