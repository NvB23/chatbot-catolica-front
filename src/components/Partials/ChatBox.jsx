import { useState, useEffect } from "react";
import styled from "styled-components";
import microfone from "../../../public/assets/images/microfone.png";
import enviar from "../../../public/assets/images/enviar.png";


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

  const enviarMensagem = () => {
    if (mensagem.trim() === "") return;

      setConversa([...conversa, { autor: "Usuario", texto: mensagem }]);
      setMensagem("");
  };

  const enviarMensagemComEnter = (event) => {
    if (mensagem.trim() === "") return;

    if (event.key == "Enter") {
      setConversa([...conversa, { autor: "Usuario", texto: mensagem }]);
      setMensagem("");
    }
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
  background: transparent;
`;
