import { useState, useEffect } from "react";
import styled from "styled-components";
import microfone from "../assets/microfone.png";
import enviar from "../assets/enviar.png";


export default function ChatBox({ conversa, setConversa }) {
  const [mensagem, setMensagem] = useState("");

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

    setConversa([...conversa, { autor: "Você", texto: mensagem }]);
    setMensagem("");
  };

  return (
      <ChatParteDeFora>
        <Mensagens>
          {conversa.map((msg, index) => (
            <Mensagem key={index} tipo={msg.autor === "Você" ? "usuario" : "bot"}>
              {msg.texto}
            </Mensagem>
          ))}
        </Mensagens>

        <CaixadeTexto>
      
          <IconesFigma>
            <img src={microfone} alt="Microfone" />
          </IconesFigma>

          <Input
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
  background: #F1F1F1;
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
  background: ${(props) => (props.tipo === "usuario" ? "#b0b0b0" : "#fff")};
  color: ${(props) => (props.tipo === "usuario" ? "white" : "#002366")};
  align-self: ${(props) => (props.tipo === "usuario" ? "flex-end" : "flex-start")};
  padding: 8px 12px;
  border-bottom-left-radius: ${(props) => (props.tipo === "usuario" ? "12px" : "0px")};
  border-bottom-right-radius: ${(props) => (props.tipo === "bot" ? "12px" : "0px")};
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  max-width: 80%;
`;

const CaixadeTexto = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
  background: transparent;
  border-top: 1px solid #ccc;
`;

const IconesFigma = styled.button`
  background: #030B65;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  

  img {
    width: 25px;
    height: 25px;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 10px 14px;
  border: none;
  border-radius: 20px;
  background: #f0f0f0;
  font-size: 14px;
  outline: none;
`;
