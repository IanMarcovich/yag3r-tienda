import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";

const router = Router();

// Ruta pública de login
router.post("/login", AuthController.login);

export default router;
