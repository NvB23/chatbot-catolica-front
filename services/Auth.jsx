import { createContext, useState, useEffect } from "react";

export const contextoDeAutenticacao = createContext();

export function AuthProvider({filho}) {
    const [usuario, setUsuario] = useState(null);
    useEffect( () => {
        fetch("https://wcz8xx88-5000.brs.devtunnels.ms/eu",
            {
                credentials: "include"
            }
        ).then((requisicao) => {
            if (requisicao.ok){
                return requisicao.json;
            }
            else{
                throw new Error("Usuário não autenticado");
            }
        }).then((dados)=>{
            setUsuario(dados);
        } )
    },[] );
     const  entrar = async (email,senha) => {
        const requisicao = fetch("https://wcz8xx88-5000.brs.devtunnels.ms/entrar",
            {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({email,senha}),

            }
        )
        if (requisicao.ok){
            const dadosUsuario = (await requisicao).json;
            setUser(dadosUsuario);
            return true;

        }
        return false;

    }
      const sair = async () => {
        const requisicao = fetch("https://wcz8xx88-5000.brs.devtunnels.ms/sair",
            {
                method: "POST",
                credentials: "include",
            }
        )
        setUsuario(null)
    }
    return (
        <AuthContext.Provider value={{ usuario, entrar, sair }}>
            {filho}
        </AuthContext.Provider>
    );
    
}