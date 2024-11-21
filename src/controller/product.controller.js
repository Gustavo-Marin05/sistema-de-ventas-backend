import Product from "../models/product.model.js";
import Category from "../models/category.model.js";

//creacion del producto
export const createProducts = async (req, res) => {
  //con esto estamos creando un nuevo producto
  const { nameProduct, amount, price, category } = req.body;

  try {
    const categoryFound = await Category.findById(category);
    if (!categoryFound)
      return res.status(400).json(["categoria no encontrada"]);

    const newProduct = new Product({
      nameProduct,
      amount,
      price,
      user: req.user.id, //esto guarda junto al usuario
      category: categoryFound._id,
    });

    const productSave = await newProduct.save();

    const populateProduct = await Product.findById(productSave._id).populate("user").populate("category");

    res.json(populateProduct);
  } catch (error) {
    console.log("error al crear el producto");
    res.status(500).json(["error al crear el producto"]);
  }
};
//nos mostrara todos los productos del usuario que inicio secion
export const products = async (req, res) => {
  try {
    const productFound = await Product.find({ user: req.user.id }).populate(
      "user"
    );
    res.json(productFound);
  } catch (error) {
    console.log(error);
    res.status(400).json(["error en productos"]);
  }
};

//nos mostrara solo un producto mandado su id del usuario que inicio secion
export const product = async (req, res) => {
  try {
    const getproduct = await Product.findById(req.params.id).populate("user");
    if (!getproduct)
      return res.status(404).json(["no se encontro el producto"]);
    res.json(getproduct);
  } catch (error) {
    console.log(error);
    res.status(400).json(["error al encotrar el producto"]);
  }
};

//editara un producto con un id seleccionado del usuario registrado
export const productUp = async (req, res) => {
  try {
    const productupdate = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!productupdate)
      return res.status(404).json(["no se encontro el producto"]);
    res.json(productupdate);
  } catch (error) {
    console.log(error);
    res.send("error al actualizar");
  }
};

//borrara el producto con un id seleccionado del usuario que esta registrado
export const deleteproduct = async (req, res) => {
  try {
    const productDelete = await Product.findByIdAndDelete(req.params.id);
    if (!productDelete)
      return res.status(404).json(["no se encontro el producto"]);
    return res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(400).json(["error al borrar el producto"]);
  }
};
