import { Router } from "express";
import { PostClientes } from "../controllers/PostClientes.controllers.js";

const router = Router();

router.post('/', PostClientes);

export default router;