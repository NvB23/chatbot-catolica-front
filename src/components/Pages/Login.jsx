
import iconeChat from "../../../public/assets/images/iconeChat.png";
import fafic from "../../../public/assets/images/fafic.png";
import styled, { createGlobalStyle } from "styled-components";
import olho from "../../../public/assets/images/Eye.png";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden; 
  }
`;

export default function Login() {
  return (
    <>
      <GlobalStyle/>
      <Container>
      <Ladoesquerdo>
        <ChatImg src={iconeChat} alt="Chat" />
        <Menssagem>
          <Titulo>Bem-vindo ao Chatbot Catolica!</Titulo>
          <Texto>Estamos aqui para facilitar sua jornada acadêmica.</Texto>
          <Texto>Tire dúvidas, acesse informações e fale com a gente</Texto>
          <Texto>de forma rápida e prática, tudo em um só lugar</Texto>
        </Menssagem>
        <Logo src={fafic} alt="fafic" />
      </Ladoesquerdo>

      <LadoDireito>
        <Centralizar> 
          <Titulod>
            ENTRAR
            <TextoCrieConta>Não tem conta?<Link>Crie agora</Link></TextoCrieConta>
            <Email>
              <label>Email: </label>
              <input type="email" />
            </Email>
            <Campo>
              <label>Senha: </label>
              <input type="password"  />
              <img src={olho} alt="" />
            </Campo>
          </Titulod>
          </Centralizar>
      </LadoDireito>
    </Container>
    </>

  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  margin: 0px;
  padding: 0px;
`;
const Ladoesquerdo = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  justify-content: space-around; 
  align-items: center;
  background-color: #ffffff;
  height: 100%;
  
`;



const ChatImg = styled.img`
  width: 200px;
  max-width: 100%;
  height: auto;
  max-height: 20%; 
`;

const Logo = styled.img`
  width: 200px;
  max-width: 100%;
  height: auto;
  
`;

const Menssagem = styled.div`
  text-align: center;
  max-height: 50%; 
`;

const Titulo = styled.h2`
  font-size: 24px;
`;

const Texto = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;
const LadoDireito = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #6470F5 0%, #212DAC 75%);
  margin: 0;
  padding: 0;
  flex-direction: column;
`;
const Centralizar = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: start;
  
  
`;
const Link = styled.span`
  text-align: start;
`;
const TextoCrieConta = styled.p`
  font-size: 16px;

`;
const Email = styled.div`
width: 100%;

  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;

    input{ 
    width: 100%;
    height: 35px;
    border-radius: 10px;
    border-color: transparent;
    background-color: #ffff;
    outline: none;
    padding: 20px 10px;
    font-size: 20px;

  }
`
const Campo = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
  position: relative;
  

label{ 
  text-align: start;
  font-size: 18px;
  color: rgba(255,255,255,0.5);
  
}
input{ 
  width: 100%;
  height: 35px;
  border-radius: 10px;
  border-color: transparent;
  background-color: #ffff;
  outline: none;
  padding: 10px 45px 10px 10px;
  font-size: 20px;
  
}
img{
  width: 5%;
  position: absolute;
  right: -50px;
  top: 50%;
  cursor: pointer;
}
`
const Titulod = styled.h2`
color: #ffff;

font-size: 42px;
`;