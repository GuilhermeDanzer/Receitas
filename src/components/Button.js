import React from "react";
import styled from "styled-components";

export const Botao = styled.button`
  outline: none;
  background: transparent;
  border-radius: 20px;
  border: solid 2px;
  border-color: ${(props) => props.theme.colors.primary};
  margin-top: 5px;
  height: 40px;

  font-weight: bold;
  align-self: ${(props) => (props.center ? "center" : "flex-end")};
  cursor: pointer;

  &:hover {
    font-weight: bold;
    background-color: ${(props) => props.theme.colors.primary};
    color: #fff;
  }
`;

export const BotaoUpload = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
  font-size: 1.25em;
  font-weight: 700;
  color: white;
  background-color: black;
  display: inline-block;
`;
