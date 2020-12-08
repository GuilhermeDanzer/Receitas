import { PesquisaItens } from "../../components/PesquisaItens";
import { Card } from "../../components/Card";
import React from "react";
import styled from "styled-components";
import comida4 from "../../assets/comida4.jpg";
import { useRouter } from "next/router";

const Receitas = (props) => {
  const router = useRouter();
  return (
    <>
      <Card>
        <PesquisaItens imagem={comida4} />
        <PesquisaItens imagem={comida4} />
      </Card>
    </>
  );
};

export default Receitas;
