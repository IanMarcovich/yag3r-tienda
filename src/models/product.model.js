import fs from "fs/promises";
import path from "path";

const productsFile = path.resolve("src/data/products.json");

const readProducts = async () => {
  const content = await fs.readFile(productsFile, "utf8");
  return JSON.parse(content || "[]");
};

const writeProducts = async (products) => {
  await fs.writeFile(productsFile, JSON.stringify(products, null, 2), "utf8");
};

const getAllProducts = async () => {
  return await readProducts();
};

const getProductById = async (id) => {
  const products = await readProducts();
  return products.find((product) => product.id === id) || null;
};

const createProduct = async (productData) => {
  const products = await readProducts();
  const newProduct = {
    id: Date.now().toString(),
    ...productData,
  };
  products.push(newProduct);
  await writeProducts(products);
  return newProduct;
};

const deleteProduct = async (id) => {
  const products = await readProducts();
  const index = products.findIndex((product) => product.id === id);
  if (index === -1) {
    return false;
  }
  products.splice(index, 1);
  await writeProducts(products);
  return true;
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
};
