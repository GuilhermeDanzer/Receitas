import React, { useState, useContext } from "react";
import { Context as ReceitaContext } from "../../context/receitaContext";
import { PesquisaItens } from "../../components/PesquisaItens";
import { Card } from "../../components/Card";
import styled from "styled-components";
import comida4 from "../../assets/comida4.jpg";

const Receitas = () => {
  const { state } = useContext(ReceitaContext);
  var receitasPesquisadas = state.pesquisaReceitas;

  if (receitasPesquisadas === "") {
    receitasPesquisadas = undefined;
  }
  return (
    <>
      <Card>
        {receitasPesquisadas !== undefined || receitasPesquisadas === "" ? (
          receitasPesquisadas.map((receita) => {
            return (
              <PesquisaItens
                nome={receita.nome}
                tempo={receita.tempo}
                porcao={receita.porcao}
                imagem={receita.img}
                idReceita={receita.idReceita}
              />
            );
          })
        ) : (
          <h1 style={{ textAlign: "center" }}>Nenhuma Receita Encontrada</h1>
        )}
      </Card>
    </>
  );
};

export default Receitas;
