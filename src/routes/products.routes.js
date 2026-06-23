import { Router } from "express";
import ProductController from "../controllers/product.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

// Todas las rutas de productos están protegidas por JWT
router.get("/", authMiddleware, ProductController.getAllProducts);
router.get("/:id", authMiddleware, ProductController.getProductById);
router.post("/create", authMiddleware, ProductController.createProduct);
router.delete("/:id", authMiddleware, ProductController.deleteProduct);

export default router;
