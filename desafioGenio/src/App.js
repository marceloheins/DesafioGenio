import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const  GlobalStyle = createGlobalStyle`
*{
margin:0;
padding:0;
box-sizing: border-box;
}

body{
height: 100vh;
  font-family: "Sevillana", cursive;
  background-image: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/Imagem%20palacio.png?raw=true");
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
`;

const Botao = styled.button`
  width : 370px;
  color: #ffffff;
  font-family: "Sevillana", cursive;
  font-weight: 400;
  font-size: 40px;
`;

const Imagem = styled.img`
  width: 741px;
  height: 691px;
`;

const Main = styled.main`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Titulo = styled.h1`
  color: white;
  text-align: center;
  font-weight: 400;
  font-size: 62px;
`;

export default function App() {
    const [lampada, setLampada] = useState(false);
    const trocarLampada = () => {
      setLampada(!lampada);
    };
  
    return (
      <Main>
        <GlobalStyle />
  
        <Titulo>
          "LIBERTE A MAGIA DA PROGRAMAÇÃO COM A LÂMPADA DO ALADIN"{" "}
        </Titulo>
  
        <Imagem
          src={
            lampada
              ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
              : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
          }
          alt="Lâmpada"
          onClick={trocarLampada}
        />
  
        <Botao onClick={trocarLampada}> Clique Aqui</Botao>
      </Main>
    );
  }