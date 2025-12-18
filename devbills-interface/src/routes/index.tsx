import { BrowserRouter, Route, Routes } from "react-router";
import { AuthProvider } from "../context/AuthContext";
import AppLayout from "../layout/App.layout";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivateRoutes from "./PrivateRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route element={<PrivateRoutes />}>
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<Dashboard />}></Route>
            </Route>
          </Route>

          <Route path="*" element={<h2>Página não encontrada</h2>}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
