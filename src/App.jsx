import { useState } from "react";
import styled from "styled-components";
import ChatBox from "./components/ChatBox";
import { useNavigate } from "react-router-dom";


export default function App() {
  const [open, setOpen] = useState(false);
  const [conversa, setConversa] = useState([]); 
  const navigate = useNavigate();
  
  const abrirExportacaoPDF = () => {
    navigate("/login");
  };




  const handleClick = () => setOpen(!open);

  return (
    <div>
      <Janela open={open}>
       
        <ChabecaChat>
          <img onClick={abrirExportacaoPDF} src="/enviarpdf.png" alt="enviapdf" />
          CHATBOT CATÓLICA
          <BotaoFechar onClick={handleClick}>✖</BotaoFechar>
        </ChabecaChat>
        <ChatBox conversa={conversa} setConversa={setConversa} />
      </Janela>

      <BotaoDoChat onClick={handleClick}>
        <img src="/chat.png" alt="Chat" />
      </BotaoDoChat>
    </div>
  );
}


const BotaoDoChat = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background: transparent;
  padding: 0;
  z-index: 1000;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
    transition: 0.2s;
  }
`;

const Janela = styled.div`
  position: fixed;
  bottom: 90px;
  right: 20px;
  width: 350px;
  height: 500px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: ${(props) => (props.open ? "flex" : "none")}; /* só esconde */
  flex-direction: column;
  overflow: hidden;
`;

const ChabecaChat = styled.div`
  background: #002147;
  color: white;
  padding: 10px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img{ 
     width: 7%;
    height: 100%;
    cursor: pointer;
    
    
  }
    
`;

const BotaoFechar = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
`;
