import { Router } from "express";
import { EditarPerfil } from "../controllers/EditarPerfil.controllers.js";

const router = Router();

router.put('/EditarPerfil/:userId', EditarPerfil);


export default router;