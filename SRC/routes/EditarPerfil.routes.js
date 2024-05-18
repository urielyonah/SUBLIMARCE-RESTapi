import { Router } from "express";
import { EditarPerfil } from "../controllers/EditarPerfil.controllers.js";
import upload from '../multerConfig.js';

const router = Router();

router.put('/:userId', upload.single('imagen'), EditarPerfil);


export default router;