import styled from "styled-components";
import { useUsuarioStore } from "../../../services/useUsuarioStore";
import adicionarUsuario from "../../../public/assets/images/adicionarUsuario.png";
import botaoAdicionar from "../../../public/assets/images/botaoAdicionar.png";
import faficchatbot from "../../../public/assets/images/faficchatbot.png";
import adicionarDocumento from "../../../public/assets/images/adicionarDocumento.png";
import BotaoSair from "../../../public/assets/images/BotaoSair.png";
import lixeira from "../../../public/assets/images/lixeira.png";
import "@fontsource/alfa-slab-one";
import { Navigate } from "react-router-dom";
import { useTextosStore } from "../../../services/useTextosStore";



export default function App() {
  const { usuario } = useUsuarioStore();

  const logout = useUsuarioStore(set => set.logout);

  const { textos } = useTextosStore();

  async function fazerLogout(event) {
    event.preventDefault();
    logout();
    <Navigate to="/login" replace />
  }

    return (
        <Container>
          <Header>
            <LogoArea>
                <Logo src={faficchatbot} alt = "Logo"/>
            </LogoArea>
            {
                usuario.TIPO === "ADMIN" ?
              <Adicionar> 
                <Titulo>ADICIONAR</Titulo>

                <Botao>
                  <img src={adicionarUsuario} alt="Adicionar usuário" />
                  <span>Administrar <br /> usuario</span>
                </Botao>

                <Botao>
                  <img src={adicionarDocumento} alt="Adicionar documento" />
                  <span>Adicionar <br /> Documentos</span>
                </Botao>
              </Adicionar>
              
              :

              <BotaoAdicionarNovoTexto src={botaoAdicionar} alt="Adicionar documento" />
            }

            <InfoUsuario>
              <span><NomeUsuario>{usuario.NOME} </NomeUsuario>({usuario.TIPO === "ADMIN" ? "ADMIN" : "COMÚM"})</span>
            </InfoUsuario>

            <Sair onClick={fazerLogout}>
              <Icone src={BotaoSair} alt = "Botão Sair"/>
            </Sair>
        
          </Header>

       
      <Main>
        
        <Aviso>
          <h2>Aviso de Palestra: Inovação e Tendências em Inteligência Artificial</h2>
          <p>
            A Coordenação do Curso de Ciência da Computação tem o prazer de br <br />
            convidar todos os alunos, professores e interessados para a palestra
            especial:
          </p>

          
           
              <strong>Tema:</strong> Inovação e Tendências em Inteligência Artificial <br />
            
              <strong>Palestrante:</strong> Dr. João Silva – Especialista em IA e <br />
              Pesquisador em Machine Learning <br />
            
              <strong>Data:</strong> 15 de julho de 2025 (terça-feira) <br />
           
           
              <strong>Horário:</strong> 19h00 às 21h00 <br />
           
           
              <strong>Local:</strong> Auditório Principal da Faculdade Católica da
              Paraíba <br />
            
          

          <Pontos>
            <p>A palestra é gratuita e aberta a toda comunidade acadêmica.</p>
            <p>Certificado de participação mediante inscrição prévia.</p>
            <p>
              Inscrições pelo link:{" "}
              <a href="https://www.catolicapb.edu.br/palestras">
                www.catolicapb.edu.br/palestras
              </a>{" "}
              até 12/07.
            </p>
            <p>Vagas limitadas — garanta já a sua!</p>
            <p>
              Contato:{" "}
              <a href="mailto:computacao@catolicapb.edu.br">
                computacao@catolicapb.edu.br
              </a>
            </p>
            <p>Telefone: (83) 0000-0000</p>
          </Pontos>
        </Aviso>

        
        <PainelDocumentos>
        <TituloPainel>DOCUMENTOS CADASTRADOS</TituloPainel>

      <Lista>
        <Colunas>
          <ColNome>Nome Documento</ColNome>
          <ColAutor>Autor</ColAutor>
          <ColDataHora>Data-Hora Upload</ColDataHora>
          <ColDeletar>Deletar</ColDeletar>
        </Colunas>


      {/* {textos.foreach((doc) => (
        <Item>
          <CampoTitulo>{doc.titulo}</CampoTitulo>
          <CampoAutor>{doc.titulo}</CampoAutor>
          <CampoDataHora>{doc.data}</CampoDataHora>
          <Lixeira src={lixeira} alt="lixeira" />
        </Item>
              ))} */}
      </Lista>
    </PainelDocumentos>
      </Main>    
    </Container>
    );

}

const Icone = styled.img`
    height: 30px;
`;


const Container = styled.div`
  background-color: #ffffff;
  padding: 30px;;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const LogoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
`;

const Logo = styled.img`
  height: 90px;
`;

const Adicionar = styled.div`
  height: 90px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 3px solid #0b3b91;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 20px;
  gap: 20px;
`;

const Titulo = styled.h1`
  position: absolute;
  top: -25px;
  background-color: #ffffff;
  color: #0b3b91;
  padding: 4px 16px;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 2px;
`;

const Botao = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;   
  justify-content: center;
  flex-direction: row;   
  width: 220px;
  height: 65px;
  cursor: pointer;
  gap: 10px;            
  transition: 0.3s;

  img {
    
    height: 52  px;
  }

  span {
    font-size: 14px;
    font-weight: 600;
    color: #0b3b91;  
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const BotaoAdicionarNovoTexto = styled.img`
  cursor: pointer;
  animation: transform;

  &:hover {
    transform: scale(1.05);
  }
`

const InfoUsuario = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-left: 10px;
  color: #002367;
  font-family: 'Alfa Slab One', sans-serif;
  font-weight: 100;

`;

const NomeUsuario = styled.span`
  font-size: 22px;
`

const Sair = styled.button`
  background-color: #c92a2a;
  color: white;
  padding: 6px 12px;
  border: none;
  border-radius: 12px;
  margin-left: 15px;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #a61e1e;
  }
`;

const Main = styled.main`
  border-radius: 14px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 40px;
`;

const Aviso = styled.section`
  h2 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 24px;
  }

  p {
    line-height: 1.6;
    margin-bottom: 12px;
  }

  
  strong {
    color: #000;
  }
`;

const Pontos = styled.div`
  font-size: 14px;
  color: #333;
  line-height: 1.6;

  a {
    color: #0b3b91;
    text-decoration: underline;
  }

  p + p {
    margin-top: 6px;
  }
`;

const PainelDocumentos = styled.div`
  background-color: #f2f2f2; 
  border-radius: 10px;
  border: 2px solid #0b3b91; 
  overflow: hidden;
  width: 600px;
  height: auto;
`;

const TituloPainel = styled.div`
  background-color: #0b3b91;
  color: white;
  text-align: center;
  font-weight: 600;
  padding: 10px;
  letter-spacing: 0.5px;
`;

const Lista = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #0b3b91;
  border-top: none;
  overflow-y: auto;
  height: 450px;

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

const Colunas = styled.div`
  display: flex;
  align-items: center;
  background-color: #9eb3df;
  color: white;
  height: 35px;
  border-top: 1px solid #0b3b91;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  border-top: 1px solid #0b3b91;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #bbc0cf;
  }
`;


const ColNome = styled.span`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-right: 1px solid #0b3b91;
  box-sizing: border-box;
`;

const ColAutor = styled.span`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-right: 1px solid #0b3b91;
  box-sizing: border-box;
`;

const ColDataHora = styled.span`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-right: 1px solid #0b3b91;
  box-sizing: border-box;
`;

const ColDeletar = styled.span`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
`;

const CampoTitulo = styled.span`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-right: 1px solid #0b3b91;
  box-sizing: border-box;
`;

const CampoAutor = styled.span`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-right: 1px solid #0b3b91;
  box-sizing: border-box;
`;

const CampoDataHora = styled.span`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-right: 1px solid #0b3b91;
  box-sizing: border-box;
`;

const Lixeira = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
  height: 24px; 
  cursor: pointer; 
  opacity: 0.8; transition: 
  opacity 0.2s; 
  
  &:hover { 
    opacity: 1;
  }
`;
