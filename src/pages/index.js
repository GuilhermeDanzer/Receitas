import Head from "next/head";
import comida1 from "../assets/comida1.jpg";
import comida2 from "../assets/comida2.jpg";
import comida3 from "../assets/comida3.jpg";
import comida4 from "../assets/comida4.jpg";
import styled from "styled-components";
import { Display } from "../components/Display";
import api from "../api/api";
const Titulo = styled.h1`
  color: white;
  padding: 20px;
`;
const comida = [
  { imagem: comida1, tipo: "Fritura", nome: "Peixe Frito" },
  { imagem: comida2, tipo: "Fritura", nome: "Peixe Frito" },

  { imagem: comida3, tipo: "Fritura", nome: "Peixe Frito" },

  { imagem: comida4, tipo: "Fritura", nome: "Peixe Frito" },
  { imagem: comida4, tipo: "Fritura", nome: "Peixe Frito" },
  { imagem: comida4, tipo: "Fritura", nome: "Peixe Frito" },
  { imagem: comida4, tipo: "Fritura", nome: "Peixe Frito" },
  { imagem: comida4, tipo: "Fritura", nome: "Peixe Frito" },
];
export default function Home(receitas) {
  return (
    <div>
      <Titulo>Melhores Avaliadas</Titulo>
      <Display imagens={receitas} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  const response = await api.get("/receitas/");
  return {
    props: {
      receitas: response.data,
    },
    revalidate: 120,
  };
};
