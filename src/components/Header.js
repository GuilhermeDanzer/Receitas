import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Pesquisa } from "./Input";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
import { Context as ReceitaContext } from "../context/receitaContext";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  &&:after {
    position: absolute;
    content: "";
    bottom: 0;
    height: 1px;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 100%;
    background: #ffffff82;
  }
`;

const Nav = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex:1;
  justify-content: space-evenly;
  align-items: baseline;
}
`;
const ItensNav = styled.div`
  transition: all 0.45s ease;
  cursor: pointer;
  color: #ffffff;
  &&:hover {
    color: #020;
  }
`;

const Texto = styled.p`
  font-size: 20px;
  font-weight: 300;
`;

export const Header = () => {
  const [value, setValue] = useState();
  const router = useRouter();
  const handleChange = (prop) => (event) => {
    setValue({ ...value, [prop]: event.target.value });
  };
  const { getReceitaPesquisa, state } = useContext(ReceitaContext);

  const pesquisar = async (termo) => {
    await getReceitaPesquisa(termo);
    console.log(state.pesquisaReceitas);
    router.push({ pathname: "/receitas" });
  };
  return (
    <Wrapper>
      <Nav>
        <Link href="/">
          <ItensNav>
            <Texto>Home</Texto>
          </ItensNav>
        </Link>
        <Link href="/cadastrar_receita">
          <ItensNav>
            <Texto>Cadastrar Receita</Texto>
          </ItensNav>
        </Link>
        <ItensNav>
          <IconContext.Provider
            value={{
              style: { verticalAlign: "middle", color: "#fff ", fontSize: 23 },
            }}
          >
            <AiOutlineSearch />
          </IconContext.Provider>
          <Pesquisa
            onChange={handleChange("pesquisa")}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                pesquisar(value);
              }
            }}
          />
        </ItensNav>
      </Nav>
    </Wrapper>
  );
};
