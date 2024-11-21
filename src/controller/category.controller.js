//import Product from '../models/product.model.js'
import Category from "../models/category.model.js";


//se crea una categoria para el usuario que inicio secion
export const createCategory = async (req, res) => {
  const { nameCategory } = req.body;

  try {
    const categoryFound = await Category.findOne({ nameCategory,user:req.user.id });//creamos la categoria para el usuario
    if (categoryFound) return res.status(202).json(["la categoria ya existe"]);

    const newCategory = new Category({
      nameCategory,
      user:req.user.id
    });

    const categorySave = await newCategory.save();

    res.json(categorySave);
  } catch (error) {
    console.log("Error al crear la categoría:", error);
    res.status(500).json({ message: "Error al crear la categoría" });
  }
};


//nos entrega todas las categorias que le pertenecen a un usuario
export const category = async (req, res) => {
  try {
    const categoryFound = await Category.find({user:req.user.id}).populate('user');
    res.json(categoryFound);

  } catch (error) {
    
  }
};
