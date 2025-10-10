import { useState } from "react";
import styled from "styled-components";
import ChatBox from "../Partials/ChatBox";
import { Link } from "react-router-dom";
import IconeAberturaChat from "../../../public/assets/images/chat.png";
import IconeChat from "../../../public/assets/images/icon-chat.png";
import IconeEnvioPDF from "../../../public/assets/images/icone_de_envio_de_PDF.png";


export default function App() {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <div>
      <Janela open={open}>
       
        <ChabecaChat>
          <img src={IconeChat} alt="enviapdf" />
          ChatBot de Suporte
          <Link to="/login">
            <img src={IconeEnvioPDF} />
          </Link>
        </ChabecaChat>
        <ChatBox />
      </Janela>

      <BotaoDoChat onClick={handleClick}>
        <img src={IconeAberturaChat} alt="Chat" />
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
  background: #F1F1F1;
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
  background: #A8C6F2;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: ${(props) => (props.open ? "flex" : "none")}; /* só esconde */
  flex-direction: column;
  overflow: hidden;
`;

const ChabecaChat = styled.div`
  background: white;
  color: black;
  font-family: 'IBM Plex Mono', monospace;
  padding: 15px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img{ 
    width: 45px;
    height: 45px; 
  }
`;
