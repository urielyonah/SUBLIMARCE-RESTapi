import { Router } from "express";
import { GetCamisasServicios } from "../controllers/GetCamisasServicios.controllers.js";

const router = Router();

router.get('/GetCamisasServicios/:CamisasServiciosId', GetCamisasServicios);

export default router;