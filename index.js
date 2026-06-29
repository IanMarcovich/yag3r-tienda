import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

import productRoutes from "./src/routes/products.routes.js";
import authRoutes from "./src/routes/auth.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carga las variables de entorno desde .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares globales ─────────────────────────────────────────────────────

// Habilita peticiones de origen cruzado (CORS)
app.use(cors());

// Interpreta el body de las peticiones en formato JSON
app.use(bodyParser.json());

// Sirve archivos estáticos (HTML, CSS, JS)
app.use(express.static(__dirname));

//Rutas ────────────────────────────────────────────────────────────────────

app.use("/api/products", productRoutes);
app.use("/auth", authRoutes);

// Ruta raíz - sirve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Ruta para tienda
app.get("/tienda", (req, res) => {
  res.sendFile(path.join(__dirname, "tienda.html"));
});

//Manejo de rutas desconocidas (404) ──────────────────────────────────────

app.use((req, res) => {
  res.status(404).json({ error: `Ruta '${req.originalUrl}' no encontrada.` });
});


//Inicio del servidor ─────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
  console.log(`🌐 Abre http://localhost:${PORT} en tu navegador`);
});
