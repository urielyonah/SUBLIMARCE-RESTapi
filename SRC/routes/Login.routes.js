import { Router } from "express";
import { Login } from "../controllers/Login.controllers.js";

const router = Router();

router.post('/', Login);

export default router;