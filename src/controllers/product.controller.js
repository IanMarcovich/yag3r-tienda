import ProductService from "../services/product.service.js";

// GET /api/products
const getAllProducts = async (req, res) => {
  try {
    const products = await ProductService.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error al obtener los productos:", error.message);
    res.status(500).json({ error: "Error interno al obtener los productos." });
  }
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductService.getProductById(id);

    if (!product) {
      return res.status(404).json({ error: `Producto con ID '${id}' no encontrado.` });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error al obtener el producto:", error.message);
    res.status(500).json({ error: "Error interno al obtener el producto." });
  }
};

// POST /api/products/create
const createProduct = async (req, res) => {
  try {
    const productData = req.body;

    if (!productData || Object.keys(productData).length === 0) {
      return res.status(400).json({ error: "El cuerpo de la petición no puede estar vacío." });
    }

    const newProduct = await ProductService.createProduct(productData);
    res.status(201).json({ message: "Producto creado exitosamente.", product: newProduct });
  } catch (error) {
    if (error.message.includes("Faltan campos")) {
      return res.status(400).json({ error: error.message });
    }
    console.error("Error al crear el producto:", error.message);
    res.status(500).json({ error: "Error interno al crear el producto." });
  }
};

// DELETE /api/products/id
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await ProductService.deleteProduct(id);

    if (!deleted) {
      return res.status(404).json({ error: `Producto con ID '${id}' no encontrado.` });
    }

    res.status(200).json({ message: `Producto con ID '${id}' eliminado correctamente.` });
  } catch (error) {
    console.error("Error al eliminar el producto:", error.message);
    res.status(500).json({ error: "Error interno al eliminar el producto." });
  }
};

export default {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
};
