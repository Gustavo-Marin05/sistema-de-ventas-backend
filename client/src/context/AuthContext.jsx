import { createContext, useContext, useState } from "react";
import { registerRequest } from "../api/auth";

const AuthContext = createContext();
export const useAuth=()=>{
    const context= useContext(AuthContext);
    if(!context) {
        throw new Error("use no");
    }
    return context;
}

export const AuthProvider = ({ children }) => {//no entiendo por que marca error si todo esta bien
  const [user, setUser] = useState(null);

  const [isAuthenticated,setIsAuthenticated]=useState(false);
  const[errors,setErrors]=useState([]);



  const signup = async (user) => {
    try {
        const res = await registerRequest(user);
        console.log(res.data);
        setUser(res.data);
        setIsAuthenticated(true);
    } catch (error) {
        console.log(error.response)
        setErrors(error.response.data);        
    }
  };
  return (
    <AuthContext.Provider
      value={{
       
        signup,
        user,
        isAuthenticated,
        errors
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};