import { useUsuarioStore } from "../../../services/useUsuarioStore";

export default function AdmTextos() {
    const { usuario } = useUsuarioStore();
    
    return (
        <>
            <h1>ID do Usuário: {usuario['IDUSUARIO']}</h1>
            <h1>Nome: {usuario['NOME']}</h1>
            <h1>Email: {usuario['EMAIL']}</h1>
            <h1>Tipo: {usuario['TIPO']}</h1>
        </>
    );
}