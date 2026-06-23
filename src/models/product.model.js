import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../config/firebase.js";

const productosCollection = collection(db, "productos");

export const getAllProducts = async () => {
  const snapshot = await getDocs(productosCollection);

  const productos = []
  snapshot.forEach((doc) => {
    productos.push({ id: doc.id, ...doc.data() });
  
  });
  return productos;

};
