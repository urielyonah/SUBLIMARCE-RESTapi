import { Router } from "express";
import { LoginAdmin }  from "../controllers/LoginAdmin.controllers.js";

const router = Router();

router.post('/', LoginAdmin);

export default router;