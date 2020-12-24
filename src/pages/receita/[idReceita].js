import React from "react";
import styled from "styled-components";
import { Recipes } from "../../components/Recipes";
import api from "../../api/api";

const Receita = ({ receita }) => {
  return (
    <>
      <Recipes receita={receita} />
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
