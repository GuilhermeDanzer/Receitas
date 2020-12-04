import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FiTrash2 } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Form } from "../../components/Form";
import { Card } from "../../components/Card";
import { Botao, BotaoUpload } from "../../components/Button";
import styled from "styled-components";

const LabelBotao = styled.label`
  font-size: 1.25em;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;
const Label = styled.span`
  font-size: 14px;
  font-weight: bold;
  padding: 20px 20px 20px 0px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2px;
`;
const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 20px;
  flex: 1;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;
export const Titulo = styled.h2`
  text-align: center;
`;

export const Lista = styled.ul`
  list-style-type: ${(props) => (props.order ? "decimal" : "bubble")};
`;

export const ListaItem = styled.li`
  position: relative;
  margin: 10px 0px;
`;
const CadastroReceitas = () => {
  const [values, setValues] = useState({
    listaIngredientes: [],
    listaPassos: [],
  });

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
  const addPasso = (passos) => {
    if (passos === undefined || passos === "") {
    } else {
      setValues({
        ...values,
        listaPassos: [...values.listaPassos, passos],
        passos: "",
      });
    }
  };

  const deleteIngredient = (ingrediente) => {
    setValues({
      ...values,
      listaIngredientes: values.listaIngredientes.filter(
        (valor) => valor !== ingrediente
      ),
    });
  };

  const deletePasso = (passos) => {
    setValues({
      ...values,
      listaPassos: values.listaPassos.filter((valor) => valor !== passos),
    });
  };
  const imageFunction = (event) => {
    try {
      setValues({ ...values, nomeImagem: event.target.files[0].name });
    } catch {
      console.log("");
    }
  };
  return (
    <Container>
      <Form>
        <FormContent>
          <Label>Nome da Receita</Label>
          <Input />

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
            <Input
              type="time"
              style={{ width: 140 }}
              step="600"
              onChange={handleChange("tempo")}
            />
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
          <InputContainer>
            <Label>Passo a Passo</Label>
            <Input value={values.passos} onChange={handleChange("passos")} />
          </InputContainer>
          <Botao onClick={() => addPasso(values.passos)}>Adicionar Passo</Botao>
          <BotaoUpload
            accept="image/*"
            type="file"
            onChange={imageFunction}
            name="file"
            id="file"
          />
          <LabelBotao for="file">
            {values.nomeImagem ? values.nomeImagem : "Selecione uma imagem"}
          </LabelBotao>
          <Botao
            center={true}
            style={{ width: 200 }}
            onClick={() => console.log("finalizou")}
          >
            Finalizar
          </Botao>
        </FormContent>
      </Form>
      <Card>
        <Titulo>Ingredientes</Titulo>
        <Lista>
          {values.listaIngredientes.map((ingredientes, i) => {
            return (
              <ListaItem key={i}>
                {ingredientes}{" "}
                <IconContext.Provider
                  value={{
                    style: {
                      verticalAlign: "middle",
                      color: "#1DA883 ",
                      fontSize: 23,
                      position: "absolute",
                      right: 20,
                      cursor: "pointer",
                    },
                  }}
                >
                  <FiTrash2 onClick={() => deleteIngredient(ingredientes)} />
                </IconContext.Provider>
              </ListaItem>
            );
          })}
        </Lista>
      </Card>
      <Card>
        <Titulo>Passo a Passo</Titulo>
        <Lista order={true}>
          {values.listaPassos.map((passos, i) => {
            return (
              <ListaItem key={i}>
                {passos}
                <IconContext.Provider
                  value={{
                    style: {
                      verticalAlign: "middle",
                      color: "#1DA883 ",
                      fontSize: 23,
                      position: "absolute",
                      right: 20,
                      cursor: "pointer",
                    },
                  }}
                >
                  <FiTrash2 onClick={() => deletePasso(passos)} />
                </IconContext.Provider>
              </ListaItem>
            );
          })}
        </Lista>
      </Card>
    </Container>
  );
};

export default CadastroReceitas;
