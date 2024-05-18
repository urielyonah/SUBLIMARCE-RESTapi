import { Router } from "express";
import { GetCamisasServicios } from "../controllers/GetCamisasServicios.controllers.js";

const router = Router();

router.get('/:CamisasServiciosId', GetCamisasServicios);

export default router;