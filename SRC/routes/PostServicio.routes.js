import { Router } from "express";
import { PostServicio } from "../controllers/PostServicio.controllers.js";
import upload from "../multerConfig.js";

const router = Router();

router.post('/', upload.single('imagen'), PostServicio);

export default router;