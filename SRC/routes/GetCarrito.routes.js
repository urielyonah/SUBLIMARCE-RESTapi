import { Router } from "express";
import { GetCarrito } from "../controllers/GetCarrito.controllers.js";

const router = Router();

router.get('/GetCarrito/:userId', GetCarrito);

export default router;