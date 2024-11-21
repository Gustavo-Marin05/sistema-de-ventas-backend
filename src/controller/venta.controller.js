import Venta from "../models/venta.model.js";
import Product from "../models/product.model.js";

export const createVenta = async (req, res) => {
    try {
      const { products } = req.body;
     
  
      if (!products || !Array.isArray(products) || products.length === 0) {
        return res.status(400).json({ error: "El campo 'products' debe contener al menos un producto." });
      }
  
      let totalAmount = 0;
  
      // Calcular el totalAmount sumando (precio x cantidad) para cada producto
      for (const item of products) {
        if (!item.product || !item.quantity || item.quantity <= 0) {
          return res.status(400).json({
            error: "Cada producto debe tener un ID válido y una cantidad mayor a 0.",
          });
        }
  
        // Buscar el producto por su ID
        const productDetails = await Product.findById(item.product);
        if (!productDetails) {
          return res
            .status(404)
            .json({ error: `Producto con ID ${item.product} no encontrado.` });
        }
  
        // Sumar al total el precio del producto multiplicado por la cantidad
        totalAmount += productDetails.price * item.quantity;
      }
  
      
      //esto permite ya guardar al usuario que inicio secion como se ve en user
      //pero si es nescesario ingresar el id del producto que se esta vendiendo
      //y se calculara de manera automatica el precio total de la compra
      const venta = new Venta({
        user:req.user.id,
        products,
        totalAmount, // Total calculado
      });
  
      // Guardar en la base de datos
      const savedVenta = await venta.save();
  
      res.json(savedVenta);
    } catch (error) {
      console.error("Error al crear la venta:", error);
      res.status(500).json({ error: "Error al procesar la venta." });
    }
  };