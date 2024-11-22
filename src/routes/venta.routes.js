import { Router } from "express";
import { createVenta,getVenta } from "../controller/venta.controller.js";
import { authRequired } from "../middleware/validateToken.js";


const router =Router();

router.post('/venta',authRequired,createVenta);
router.get('/ventas',authRequired,getVenta);





export default router
 
