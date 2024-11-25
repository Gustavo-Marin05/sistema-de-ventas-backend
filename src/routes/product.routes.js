import { Router } from "express";
import { createProducts,products ,product,productUp,deleteproduct} from "../controller/product.controller.js";
import { authRequired } from "../middleware/validateToken.js";


const router=Router();


//crear una tarea
router.post('/createProducts',authRequired,createProducts);//creamos el producto
router.get('/products',authRequired,products);//llamamos a todos los productos de un usuarios
router.get('/products/:id',authRequired,product);//llamamos a un solo producto que el usuario tenga
router.put('/products/:id',authRequired,productUp);//editamos un producto
router.delete('/products/:id',authRequired,deleteproduct);//borramos el producto seleccionado


export default router;


//con el authrequired estamos validando si de verdad es el usuario es quien inicio secion