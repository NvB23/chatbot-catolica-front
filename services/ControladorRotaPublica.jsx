import { Navigate } from "react-router-dom";

import { useUsuarioStore } from "./useUsuarioStore";

export function ControladorRotaPublica({ children }) {
    const { usuario, inicializado } = useUsuarioStore();

    if (!inicializado) return null;

    if (usuario) return <Navigate to="/adm-textos" replace />;

    return children;
}