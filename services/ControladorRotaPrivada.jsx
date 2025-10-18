import { Navigate } from "react-router-dom";

import { useUsuarioStore } from "./useUsuarioStore";

export function ControladorRotaPrivada({ children }) {
    const { usuario, inicializado } = useUsuarioStore();

    if (!inicializado) return null;

    if (!usuario) return <Navigate to="/login" replace />;

    return children;
}