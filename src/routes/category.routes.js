import { Router } from "express";
import { createCategory,category } from "../controller/category.controller.js";
import { authRequired } from "../middleware/validateToken.js";

const router =Router();


router.post('/createCategory',authRequired,createCategory);//creara las categorias
router.get('/categories',authRequired,category);// obtendra todas las categorias que tiene un user
router.get('/category/:id');// obtendra solo una categoria que tiene el user
router.put('/categoryE/:id');//editara la categirua de un user
router.delete('/categoryD/:id')//borrara una categoria seleccionanda del user




export default router;