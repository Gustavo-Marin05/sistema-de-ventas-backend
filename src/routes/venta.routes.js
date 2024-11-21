import { Router } from "express";
import { createVenta } from "../controller/venta.controller.js";
import { authRequired } from "../middleware/validateToken.js";


const router =Router();

router.post('/venta',authRequired,createVenta);




export default router
 
