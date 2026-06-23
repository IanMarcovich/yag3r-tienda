import db from "../config/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import dotenv from "dotenv";
dotenv.config();

const productos = [
  {
    nombre: "Laptop Gamer",
    descripcion: "Potente laptop para juegos con gráficos de alta calidad.",
    precio: 1500,
    stock: 10,
    categoria: "Electrónica"
  },
  {
    nombre: "Smartphone",
    descripcion: "Teléfono inteligente con cámara de alta resolución.",
    precio: 800,
    stock: 20,
    categoria: "Electrónica"
  },
  {
    nombre: "Auriculares Inalámbricos",
    descripcion: "Auriculares Bluetooth con cancelación de ruido.",
    precio: 200,
    stock: 15,
    categoria: "Accesorios"
  }
];

const prodcutosCollectionRef = collection(db, "productos");

const createproductsCollection = async () => {
    productsseeders.forEach(async (product) => {
        await addDoc(prodcutosCollectionRef, product);
        console.log(`Producto '${product.nombre}' agregado exitosamente.`);
    });
}
async function seedProductos() {
  const productosCollection = collection(db, "productos");
  
  for (const producto of productos) {
    try {
      await addDoc(productosCollection, producto);
      console.log(`Producto '${producto.nombre}' agregado exitosamente.`);
    } catch (error) {
      console.error("Error al agregar producto:", error);
    }
  }
}

seedProductos();