import { Router } from "express";
import { PostServicio } from "../controllers/PostServicio.controllers.js";

const router = Router();

router.post('/', PostServicio);

export default router;