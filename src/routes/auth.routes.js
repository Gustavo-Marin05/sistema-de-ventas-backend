import {Router} from "express";
import {
    register,
    login,
    logout,
    profile,
} from '../controller/auth.controller.js';
import { authRequired } from "../middleware/validateToken.js";
import { validateSchema } from "../middleware/validator.middleware.js";
import { registerSchema ,loginSchema } from "../schemas/auth.schema.js";

const route=Router();

route.post('/register',validateSchema(registerSchema),register);
route.post('/login',validateSchema(loginSchema),login);
route.post('/logout',logout);
route.get('/profile',authRequired,profile);

export default route;

// lo que hace validateSchema es que valida si los datos estaran correctamente implementados que vendran del lado del frot 
//en caso de que si queremos usar en profile por ejemplo seria:

// route.get('/profile',authRequired,validateSchema(profileSchema),profile);

//siempre ira despues del authrequired, en este caso no es tan nesesario en perfil
