//import Product from '../models/product.model.js'
import Category from "../models/category.model.js";

//se crea una categoria para el usuario que inicio secion
export const createCategory = async (req, res) => {
  const { nameCategory } = req.body;

  try {
    const categoryFound = await Category.findOne({
      nameCategory,
      user: req.user.id,
    }); //creamos la categoria para el usuario
    if (categoryFound) return res.status(202).json(["la categoria ya existe"]);

    const newCategory = new Category({
      nameCategory,
      user: req.user.id,
    });

    const categorySave = await newCategory.save();

    res.json(categorySave);
  } catch (error) {
    console.log("Error al crear la categoría:", error);
    res.status(500).json({ message: "Error al crear la categoría" });
  }
};

//nos entrega todas las categorias que le pertenecen a un usuario
export const categories = async (req, res) => {
  try {
    const categoryFound = await Category.find({ user: req.user.id }).populate(
      "user"
    );
    res.json(categoryFound);
  } catch (error) {}
};


//esto nos devuelve solo una categoria del usuario que inicio secion
export const category = async (req, res) => {
  try {
    const cat = await Category.findById(req.params.id).populate("user");
    if (!cat)
      return res.status(404).json(["no se pudo encontar la categoria"]);
    res.json(cat);
  } catch (error) {
    console.log(error);
    res.status(500).json(["error al obtener la categoria"]);
  }
};


//con esto estamos borrando una categoria seleccionada del usuario que inicio secion
export const deleteCategoy =async(req,res)=>{
  try {
    
    const categoryDelete = await Category.findByIdAndDelete(req.params.id);
    if(!categoryDelete) return res.status(404).json(['no se encontro la categoria para borrar']);
    return res.sendStatus(204);
  } catch (error) {
    console.log(error);    
  }
}


//con esto se actualizara una categoria seleccionada del usuario que inicio secion
export const UpdateCategory =async (req,res)=>{
  try {
    
    const categoryUp =await Category.findByIdAndUpdate(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    
  }
}