import { Form } from "../../components/Form";
import { Container } from "../cadastrar_receita/index";
import React from "react";
import styled from "styled-components";

const Receitas = ({ receita }) => {
  console.log(receita);
  return (
    <Container>
      <Form>
        <h2>{receita}</h2>
      </Form>
    </Container>
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
