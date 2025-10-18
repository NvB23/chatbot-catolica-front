import iconeChat from "../../../public/assets/images/iconeChat.png";
import fafic from "../../../public/assets/images/fafic.png";
import styled, { createGlobalStyle } from "styled-components";
import olho from "../../../public/assets/images/Eye.png";
import semOlho from "../../../public/assets/images/OcultEye.png";
import { useState, useRef } from "react";
import { useUsuarioStore } from "../../../services/useUsuarioStore";
import { Navigate } from "react-router-dom";
import logoAnimada from "../../../public/Logo-Animada.gif";
import BalaoErro from "../Partials/BalaoErro";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden; 
  }
`;

export default function Login() {
  const [exibiSenha, setExibiSenha] = useState(false);
  const [desativaBotao, setDesativaBotao] = useState(true);

  const login = useUsuarioStore((s) => s.login)

  const { carregando, erro } = useUsuarioStore();

  const emailRef = useRef();
  const senhaRef = useRef();

  function verificaCampos() {
    const email = emailRef.current.value;
    const senha = senhaRef.current.value;

    if (email.trim() === '' || senha.trim() === '') {
      setDesativaBotao(true);
    } else {
      setDesativaBotao(false);
    }
  }

  async function fazerLogin(event) {
    event.preventDefault();
    const email = emailRef.current.value;
    const senha = senhaRef.current.value;

    login(email, senha);
    <Navigate to="/adm-textos" replace />
  }

  const mudaVisibilidadeDeSenha = () => {
    setExibiSenha(!exibiSenha);
  }

  return (
    <>
      <GlobalStyle/>
      { erro !== null ? (<BalaoErro />) : (null)}
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
            </Titulod>
            <Email>
              <label>Email: </label>
              <input 
                ref={emailRef} 
                placeholder="Digite seu email" 
                type="email" />
            </Email>

            <Campo>
              <label>Senha: </label>
              <input 
                ref={senhaRef} 
                placeholder="Digite sua senha" 
                type={exibiSenha ? "text" : "password"}
                onChange={() => verificaCampos()} />

              <img 
                onClick={mudaVisibilidadeDeSenha} 
                src={exibiSenha ? semOlho : olho} 
                alt="Ativa/Desativa Visibilidade de senha"
                onChange={() => verificaCampos()} />
            </Campo>

            <TextoEsqueceuSuaSenha>Esqueceu sua senha? <br />Contate o Administrador por <a href="mailto:admin123@email.com?subject=Olá%20Administrado,%20esqueci%20minha%20senha&body=Descreva%20melhor%20o%20seu%20problema:">aqui</a>.</TextoEsqueceuSuaSenha>
            
            <Botao 
              carregando={carregando} 
              desativaBotao={desativaBotao} 
              onClick={fazerLogin} 
              disabled={carregando || desativaBotao} >
                {carregando  ? (<LogoAnimada src={logoAnimada} alt="Logo Animada" />) : 'Entrar'}
            </Botao>
 
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

const Email = styled.div`
width: 100%;

  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;

    input{ 
    width: 108%;
    height: 35px;
    border-radius: 10px;
    border-color: transparent;
    background-color: #ffff;
    outline: none;
    padding: 10px;
    font-size: 20px;
    }

    label{ 
      text-align: start;
      font-size: 18px;
      color: rgba(255,255,255,0.5);
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

const TextoEsqueceuSuaSenha = styled.span`
  color: #ffffffc5;
  margin-top: 10px;
  font-size: 18px;
  width: 112%;
  text-align: end;

  a {
    color: #ffffffc5;
  }

  a:hover {
    color: gray;
  }
`

const Botao = styled.button`
  width: 112%;
  background: ${props => props.desativaBotao ? 'linear-gradient(to top, #8080806e, gray)' : 'linear-gradient(to top, #0062E2, #006FFF)'};
  padding: 15px;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 20px;
  border-style: none;
  color: white;
  cursor: ${props => props.carregando || props.desativaBotao ?  'not-allowed': 'pointer'};
  transition: filter 0.3s;

  &:hover{
    filter: brightness(0.9);
  }
`

const LogoAnimada = styled.img`
    height: 80px;
`