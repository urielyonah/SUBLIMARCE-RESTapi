import { Router } from "express";
import { PostCamisasServicios } from "../controllers/PostCamisasServicios.controllers.js";

const router = Router();

router.post('/', PostCamisasServicios);

export default router;