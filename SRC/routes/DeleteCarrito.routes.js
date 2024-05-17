import { Router } from "express";
import { DeleteCarrito } from "../controllers/DeleteCarrito.controllers.js";

const router = Router();

router.delete('/DeleteCarrito/:pedidoId', DeleteCarrito);


export default router;