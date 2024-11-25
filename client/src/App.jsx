import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RegisterPage from "./pages/registerPage";
import LoginPage from "./pages/loginPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>home</h1>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/venta" element={<h1>ventas</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
