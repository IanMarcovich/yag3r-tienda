import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";

const router = Router();

// Ruta pública de login (no requiere JWT)
router.post("/login", AuthController.login);

export default router;
