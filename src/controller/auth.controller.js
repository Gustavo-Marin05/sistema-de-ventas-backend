import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import { createaccestoken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { fullname, username, password } = req.body;

  try {

    const userFound= await User.findOne({username});
    if(userFound) return res.status(400).json(['este nombre de usuario ya esta en usu']);
    const passwordcrypt= await bcrypt.hash(password,10);//encriptamos la contraceña



    const newUser = new User({
      fullname,
      username,
      password:passwordcrypt,
    });
    const userSave=await newUser.save();

    //crearemos un token
    const token =await createaccestoken({id:userSave._id});
    res.cookie('token',token);
    //termina de crearse el token


    res.json({//esto lo devolvera al front para que se pueda usar
      id:userSave._id,
      fullname:userSave.fullname,
      username:userSave.username,

    });

  } catch (error) {
    console.log(error);
  }

  
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {

    const userFound= await User.findOne({username});
    if(!userFound) return res.status(400).json(['no existe este usuario']);
    const isMach= await bcrypt.compare(password,userFound.password);

    if(!isMach) return res.status(400).json(['incorrect password']);


    //crearemos un token
    const token =await createaccestoken({id:userFound._id});
    res.cookie('token',token);
    //termina de crearse el token
    

    res.json({//esto lo devolvera al front para que se pueda usar
      id:userFound._id,
      fullname:userFound.fullname,
      username:userFound.username,

    });

  } catch (error) {
    res.status(500).json({message:'error'});
  }

};


export const logout =(req,res)=>{
 
  res.cookie('token',"",{
    expires:new Date(0)
  });
  return res.sendStatus(200);
  
}

export const profile= async (req,res)=>{

  const userFoun= await User.findById(req.user.id)//esta linea me va a dar todos los datos que le pertenecen al usuario

  if(!userFoun) return res.status(400).json(['usuario no encontrado']);

  return res.json({
    id:userFoun._id,
    fullname:userFoun.fullname,
    username:userFoun.username,
    password:userFoun.password,
    createdAd:userFoun.createdAt,
    updatedAt:userFoun.updatedAt

  })
  res.send('entro al perfil');
}
