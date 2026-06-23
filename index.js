import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

import productRoutes from "./src/routes/products.routes.js";
import authRoutes from "./src/routes/auth.routes.js";

// Carga las variables de entorno desde .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares globales ─────────────────────────────────────────────────────

// Habilita peticiones de origen cruzado (CORS)
app.use(cors());

// Interpreta el body de las peticiones en formato JSON
app.use(bodyParser.json());

//Rutas ────────────────────────────────────────────────────────────────────

app.use("/api/products", productRoutes);
app.use("/auth", authRoutes);

//Manejo de rutas desconocidas (404) ──────────────────────────────────────

app.use((req, res) => {
  res.status(404).json({ error: `Ruta '${req.originalUrl}' no encontrada.` });
});


//Inicio del servidor ─────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
