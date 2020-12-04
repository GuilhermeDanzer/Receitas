import {
  Container,
  Lista,
  ListaItem,
  Titulo,
} from "../cadastrar_receita/index";
import { Card } from "../../components/Card";
import React from "react";
import styled from "styled-components";
import comida4 from "../../assets/comida4.jpg";
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
const Receitas = ({ receita }) => {
  console.log(receita);
  return (
    <>
      <NomeContainer>
        <NomeReceita>Bobó de camarão</NomeReceita>
        <ImagemDiv>
          <Imagem src={comida4} alt="tese" />
        </ImagemDiv>
      </NomeContainer>

      <Container>
        <Card>
          <Titulo>Ingredientes</Titulo>
          <Lista>
            <ListaItem>Teste</ListaItem>
            <ListaItem>Teste</ListaItem>
            <ListaItem>Teste</ListaItem>
            <ListaItem>Teste</ListaItem>
            <ListaItem>Teste</ListaItem>
            <ListaItem>Teste</ListaItem>
          </Lista>
        </Card>
        <Card>
          <Titulo>Passo a Passo</Titulo>
          <Lista order>
            <ListaItem>Teste</ListaItem>
            <ListaItem>Teste</ListaItem>
            <ListaItem>Teste</ListaItem>
            <ListaItem>Teste</ListaItem>
            <ListaItem>Teste</ListaItem>

            <ListaItem>Teste</ListaItem>
          </Lista>
        </Card>
      </Container>
    </>
  );
};

export const getStaticPaths = async () => {
  const eita = [{ nome: "testa" }, { nome: "teste" }];

  const paths = eita.map((eitas) => {
    return { params: { nome: eitas.nome } };
  });
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async (context) => {
  const { nome } = context.params;

  return {
    props: {
      receita: nome,
    },
  };
};
export default Receitas;
