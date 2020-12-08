import React from "react";
import { Botao } from "./Button";
import styled from "styled-components";
const PesquisaContainer = styled.div`
    margin-left: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    overflow: hidden;
    flex: 1 1;
    flex-direction:row;
    display:flex;
}
`;

const ImagemContainer = styled.div``;
const Imagem = styled.img`
  width: 300px;
`;
const Conteudo = styled.div`
  flex: 3;
  width: 100%;
  margin-left: 10px;
`;

const Titulo = styled.h3`
  color: ${(props) => props.theme.colors.secondary};
`;

const InfoContainer = styled.div``;
const Info = styled.span`
  color: #6a6a6a;
`;
export const PesquisaItens = (props) => {
  console.log(props.imagem);
  return (
    <PesquisaContainer>
      <ImagemContainer>
        <Imagem src={props.imagem} />
      </ImagemContainer>
      <Conteudo>
        <Titulo>{props.nome}</Titulo>
        <InfoContainer>
          <Info>Porções: {props.porcao}</Info>
          <Info>Tempo de preparo: {props.tempo}h</Info>
        </InfoContainer>
        <Botao>Veja a receita</Botao>
      </Conteudo>
    </PesquisaContainer>
  );
};
