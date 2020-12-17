import React from "react";
import { Botao } from "./Button";
import styled from "styled-components";
import Link from "next/link";
const PesquisaContainer = styled.div`
    margin-left: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    overflow: hidden;
    flex: 1 1;
    flex-direction:row;
    display:flex;
    position:relative;
}
`;

const ImagemContainer = styled.div``;
const Imagem = styled.img`
  width: 300px;
`;
const Conteudo = styled.div`
    flex-direction: column;
    flex: 3;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: 10px;
}
`;

const Titulo = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
`;

const InfoContainer = styled.div``;
const Info = styled.p`
  color: #6a6a6a;
`;

const BotaoDiv = styled.div``;
export const PesquisaItens = (props) => {
  console.log(props.idReceita);
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
        <BotaoDiv>
          <Link href={`/receita/${props.idReceita}`}>
            <Botao>Veja a receita</Botao>
          </Link>
        </BotaoDiv>
      </Conteudo>
    </PesquisaContainer>
  );
};
