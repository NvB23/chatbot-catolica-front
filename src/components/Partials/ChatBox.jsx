import { useState, useEffect } from "react";
import styled from "styled-components";
import microfone from "../../../public/assets/images/microfone.png";
import enviar from "../../../public/assets/images/enviar.png";
import { enviarMensagemParaBackend } from "../../../services/MensagemService";


export default function ChatBox() {
  const [mensagem, setMensagem] = useState("");
  const [conversa, setConversa] = useState([]); 

  useEffect(() => {
    if (conversa.length === 0) {
      setConversa([
        {
          autor: "Bot",
          texto: "Sou Assistente Virtual, em que posso ajudar?",
        },
      ]);
    }
  }, [conversa, setConversa]);

  const  enviarMensagem = async () => {
    if (mensagem.trim() === "") return;

      setConversa(conversa => [...conversa, { autor: "Usuario", texto: mensagem }]);

       setConversa(prev => [...prev, { autor: "Bot", texto: "Digitando..." }]);

      setMensagem("");
      
      const respostaChatBot = await enviarMensagemParaBackend(mensagem)
      setConversa(prev => {
      const copia = [...prev];
      const ultimoIndex = copia.length - 1;
      copia[ultimoIndex] = {
        autor: "Bot",
        texto: respostaChatBot != null ? respostaChatBot : "Desculpe! Erro ao obter resposta.",
      };
      return copia;
    });
      
  };

  const enviarMensagemComEnter = async (event) => {
    if (event.key !== "Enter") return;
    if (mensagem.trim() === "") return;
  
    await enviarMensagem()
  };

  return (
      <ChatParteDeFora>
        <Mensagens>
          {conversa.map((msg, index) => (
            <Mensagem key={index} tipo={msg.autor === "Usuario" ? "usuario" : "bot"}>
              {msg.texto}
            </Mensagem>
          ))}
        </Mensagens>

        <CaixadeTexto>
      
          <IconesFigma>
            <img src={microfone} alt="Microfone" />
          </IconesFigma>

          <Input
            onKeyDown={enviarMensagemComEnter}
            type="text"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Pergunte algo..."
          />

          <IconesFigma onClick={enviarMensagem}>
            <img src={enviar} alt="Enviar" />
          </IconesFigma>
        </CaixadeTexto>
      </ChatParteDeFora>
    );
}

const ChatParteDeFora = styled.div`
  width: 350px;
  height: 500px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
`;

const Mensagens = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  word-wrap: break-word;

  &::-webkit-scrollbar {
    width: 14px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.18);
    border-radius: 8px;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.06);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0,0,0,0.32);
  }

  scrollbar-width: thin;
  scrollbar-color: rgba(0,0,0,0.18) transparent;
 
`;

const Mensagem = styled.div`
  background: ${(props) => (props.tipo === "usuario" ? "#FFF082" : "#FFFFFF")};
  color: ${(props) => (props.tipo === "usuario" ? "black" : "#000")};
  font-family: 'Inter', sans-serif;
  align-self: ${(props) => (props.tipo === "usuario" ? "flex-end" : "flex-start")};
  padding: 10px 14px;
  border-bottom-left-radius: ${(props) => props.tipo === "usuario" ? "12px" : "0px"};
  border-bottom-right-radius: ${(props) => props.tipo === "usuario" ? "0px" : "12px"};
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  max-width: 80%;
`;

const CaixadeTexto = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
  background: white;
  border-top: 1px;
`;

const IconesFigma = styled.button`
  background: transparent;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 24px;
    height: 24px;
  }
`;

const Input = styled.input`
  font-family: 'Inter', sans-serif;
  flex: 1;
  padding: 10px 14px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  outline: none;
  background-color: #8080802d;
`;
