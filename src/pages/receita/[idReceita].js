import {
  Container,
  Lista,
  ListaItem,
  Titulo,
} from "../cadastrar_receita/index";
import { Card } from "../../components/Card";
import React from "react";
import styled from "styled-components";

import api from "../../api/api";
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
const Receita = ({ receita }) => {
  const a = receita.passos[0];
  console.log(a.split(","));
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
            {receita.ingredientes[0].split(",").map((ingrediente) => {
              return <ListaItem>{ingrediente}</ListaItem>;
            })}
          </Lista>
        </Card>
        <Card>
          <Titulo>Passo a Passo</Titulo>
          <Lista order>
            {receita.passos[0].split(",").map((passo) => {
              return <ListaItem>{passo}</ListaItem>;
            })}
          </Lista>
        </Card>
      </Container>
    </>
  );
};

export const getStaticPaths = async () => {
  const response = await api.get("/receitas");

  const paths = response.data.map((receita) => {
    return { params: { idReceita: receita.idReceita } };
  });
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async (context) => {
  const { idReceita } = context.params;

  const response = await api.get(`/receita/${idReceita}`);

  /* const response = await fetch(
    `https://c5787b69ebca.ngrok.io/receita/${idReceita}`
  );
  const data = await response.json();
  console.log(response);*/

  return {
    props: {
      receita: response.data,
    },
    revalidate: 120,
  };
};
export default Receita;
