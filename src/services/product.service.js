import ProductModel from "../models/product.model.js";

const getAllProducts = async () => {
  return await ProductModel.getAllProducts();
};

const getProductById = async (id) => {
  return await ProductModel.getProductById(id);
};

const createProduct = async (productData) => {
  // Validación básica de campos requeridos
  const { name, price, description, stock } = productData;

  if (!name || !price || !description || stock === undefined) {
    throw new Error("Faltan campos obligatorios: name, price, description, stock.");
  }

  return await ProductModel.createProduct({
    name,
    price: Number(price),
    description,
    stock: Number(stock),
    createdAt: new Date().toISOString(),
  });
};

const deleteProduct = async (id) => {
  return await ProductModel.deleteProduct(id);
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
};
