import { useEffect, useState } from "react";
import styled from "styled-components";
import { useUsuarioStore } from "../../../services/useUsuarioStore";

export default function BalaoErro() {
    
    const [visivel, setVisivel] = useState(false);
    const { erro, setCarregando } = useUsuarioStore();

    useEffect(() => {
        if (erro) {
        setVisivel(true);

        const timer = setTimeout(() => {
            setVisivel(false);
            setCarregando(false)
        }, 3000);
        

        return () => clearTimeout(timer);
        }
    }, [erro, setCarregando]);

    function fechar() {
        setVisivel(false);
    }

    if (!visivel) return null;

    return (
        <>
            <BalaoErroContainer>
                <Fechar onClick={fechar}>X</Fechar>
                <Mensagem>{erro}</Mensagem>
            </BalaoErroContainer>
        </>
    );
}

const BalaoErroContainer = styled.div`
    position: fixed;
    top: 10px;
    right: 10px;
    width: 350px;
    height: 60px;
    margin-left: 220px;
    background-color: #ff0000bb;
    color: white;
    z-index: 9999;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

    animation: entrada 0.3s ease, saida 0.5s ease 2.5s;

    @keyframes entrada {
        from { opacity: 0; transform: translateY(-5px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @keyframes saida {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-5px); }
    }
`;

const Mensagem = styled.span`
    font-size: 20px;
`;

const Fechar = styled.div`
    background-color: #ff0000e2;
    display: flex;
    margin-right: 10px;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    cursor: pointer;
    font-size: 20px;
`;