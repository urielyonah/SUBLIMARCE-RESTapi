import { Router } from "express";
import { GetCamisas } from "../controllers/GetCamisas.controllers.js";

const router = Router();

router.get('/GetCamisas', GetCamisas);


export default router;