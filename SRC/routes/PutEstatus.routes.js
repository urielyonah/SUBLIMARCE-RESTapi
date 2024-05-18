import { Router } from "express";
import { PutEstatus } from "../controllers/PutEstatus.controllers.js";

const router = Router();

router.put('/', PutEstatus);

export default router;