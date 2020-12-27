import React from "react";
import styled from "styled-components";
import {
  Container,
  Lista,
  ListaItem,
  Titulo,
} from "../pages/cadastrar_receita/index";
import { Card } from "./Card";
const NomeReceita = styled.h1`
  text-align: center;
  color: #fff;
`;
const NomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImagemDiv = styled.div`
  width: 400px;
`;

const Imagem = styled.img`
  width: 100%;
`;
export const Recipes = ({ receita }) => {
  return (
    <>
      <NomeContainer>
        <NomeReceita>{receita.nome}</NomeReceita>
        <ImagemDiv>
          <Imagem src={receita.img} alt="tese" />
        </ImagemDiv>
      </NomeContainer>

      <Container>
        <Card>
          <Titulo>Ingredientes</Titulo>
          <Lista>
            {receita.ingredientes.map((ingrediente) => {
              return <ListaItem>{ingrediente}</ListaItem>;
            })}
          </Lista>
        </Card>
        <Card>
          <Titulo>Passo a Passo</Titulo>
          <Lista order>
            {receita.passos.map((passo) => {
              return <ListaItem>{passo}</ListaItem>;
            })}
          </Lista>
        </Card>
      </Container>
    </>
  );
};
