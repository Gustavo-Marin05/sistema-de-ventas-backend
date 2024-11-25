import { Router } from "express";
import { createCategory,categories,category,UpdateCategory,deleteCategoy } from "../controller/category.controller.js";
import { authRequired } from "../middleware/validateToken.js";

const router =Router();


router.post('/createCategory',authRequired,createCategory);//creara las categorias
router.get('/categories',authRequired,categories);// obtendra todas las categorias que tiene un user
router.get('/category/:id',authRequired,category);// obtendra solo una categoria que tiene el user
router.put('/categoryE/:id',authRequired,UpdateCategory);//editara la categirua de un user
router.delete('/categoryD/:id',authRequired,deleteCategoy)//borrara una categoria seleccionanda del user




export default router;