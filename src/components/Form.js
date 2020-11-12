import React, { useState } from "react";
import { Input } from "./Input";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
`;
const Titulo = styled.h2`
  text-align: center;
`;
const FormContainer = styled.div`
  background-color: #fff;
  min-height: 500px;
  flex: 3;
  border-radius: 20px;
  margin-top: 20px;
  overflow: hidden;
`;
const RecipeContainer = styled.div`
  background-color: #fff;

    margin-left: 10px;
    border-radius: 20px;
    margin-top: 20px;
    overflow: hidden;

    flex: 1;
}
`;
const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
`;

const Label = styled.span`
  font-size: 14px;
  font-weight: bold;
  padding: 20px 20px 20px 0px;
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: ${(props) => (props.space ? "space-evenly" : "flex-start")};
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2px;
`;

const Botao = styled.button`
  outline: none;
  background: transparent;
  border-radius: 20px;
  border: solid 2px;
  border-color: #de7231;

  height: 40px;
  align-self: flex-end;
  cursor: pointer;
  &:active {
    background-color: #de7231;
    color: #fff;
  }
`;
export const Form = () => {
  const [values, setValues] = useState({ listaIngredientes: [] });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const addIngredient = (ingrediente) => {
    if (ingrediente === undefined || ingrediente === "") {
    } else {
      setValues({
        ...values,
        listaIngredientes: [...values.listaIngredientes, ingrediente],
        ingrediente: "",
      });
    }
  };

  console.log(values);
  return (
    <Wrapper>
      <FormContainer>
        <FormContent>
          <Label>Nome da Receita</Label>
          <Input />

          <Row space>
            <InputContainer>
              <Label>Porções</Label>
              <Input
                style={{ width: 140 }}
                type="number"
                onChange={handleChange("porcao")}
              />
            </InputContainer>
            <InputContainer>
              <Label>Tempo de preparo</Label>
              <Input type="time" step="600" onChange={handleChange("tempo")} />
            </InputContainer>
            <InputContainer>
              <Label>Ingredientes</Label>
              <Input
                value={values.ingrediente}
                onChange={handleChange("ingrediente")}
              />
            </InputContainer>
            <Botao onClick={() => addIngredient(values.ingrediente)}>
              Adicionar Ingrediente
            </Botao>
          </Row>
        </FormContent>
      </FormContainer>
      <RecipeContainer>
        <Titulo>Ingredientes</Titulo>
        <ul>
          {values.listaIngredientes.map((ingredientes, i) => {
            return <li>{ingredientes}</li>;
          })}
        </ul>
      </RecipeContainer>
    </Wrapper>
  );
};
