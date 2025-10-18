import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/Pages/App";
import Login from "./components/Pages/Login";
import AdmTextos from "./components/Pages/AdmTextos";
import { ControladorRotaPublica } from "../services/ControladorRotaPublica";
import { ControladorRotaPrivada } from "../services/ControladorRotaPrivada";
import { useUsuarioStore } from "../services/useUsuarioStore";


export function Root() {

  const usuarioLogado = useUsuarioStore((s) => s.usuarioLogado)

  useEffect(() => {
    usuarioLogado();
  })

  return <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
              <App />
            } />
          <Route path="/login" element={
            <ControladorRotaPublica children={<Login />} />
            } />
          <Route path="/adm-textos" element={
            <ControladorRotaPrivada children={<AdmTextos />} />
            } />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
}