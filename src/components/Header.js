import React from "react";
import styled from "styled-components";
import { Pesquisa } from "./Input";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";
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
  return (
    <Wrapper>
      <Nav>
        <ItensNav>
          <Link href="/">
            <Texto>Salgados</Texto>
          </Link>
        </ItensNav>

        <ItensNav>
          <Link href="/cadastrar_receita">
            <Texto>Doces</Texto>
          </Link>
        </ItensNav>
        <ItensNav>
          <IconContext.Provider
            value={{
              style: { verticalAlign: "middle", color: "#fff ", fontSize: 23 },
            }}
          >
            <AiOutlineSearch />
          </IconContext.Provider>
          <Pesquisa />
        </ItensNav>
      </Nav>
    </Wrapper>
  );
};
