import { BrowserRouter, Route, Routes } from "react-router";
import { AuthProvider } from "../context/AuthContext";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="*" element={<h2>Página não encontrada</h2>}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
