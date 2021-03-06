import createDataContext from "./createContext";
import api from "../api/api";

const config = {
  headers: {
    "content-type": "multipart/form-data",
  },
};
const receitaReducer = (state, action) => {
  switch (action.type) {
    case "postReceita":
      return { ...state, msg: "Membro cadastrado com sucesso" };
    case "getSearchReceita":
      return { ...state, msg: "Membro editado com sucesso" }; //{...state}
    case "getAllReceitas":
      return { ...state, todasReceitas: action.payload };
    case "getReceitaPesquisa":
      return { ...state, pesquisaReceitas: action.payload };
    default:
      return state;
  }
};
const getAllReceitas = (dispatch) => async () => {
  try {
    const response = await api.get("/receitas");
    dispatch({ type: "getAllReceitas", payload: response.data });

    //navigate('Show') /receitas/:nome
  } catch (error) {
    if (error.response === undefined) {
    } else {
      const erro = error.response.data;
      alert(erro.error);
    }
  }
};

const getReceitaPesquisa = (dispatch) => async (valor) => {
  const { pesquisa } = valor;
  try {
    const response = await api.get(`/receitas/${pesquisa}`);
    dispatch({ type: "getReceitaPesquisa", payload: response.data });

    console.log(response.data);
    //navigate('Show') /receitas/:nome
  } catch (error) {
    if (error.response === undefined) {
    } else {
      const erro = error.response.data;
      alert(erro.error);
    }
  }
};

const postReceita = (dispatch) => async (valores) => {
  try {
    const {
      nome,
      tempo,
      porcao,
      listaPassos,
      listaIngredientes,
      file,
    } = valores;

    console.log(valores);
    const data = new FormData();
    data.append("file", file);
    data.append("nome", nome);
    data.append("tempo", tempo);
    data.append("porcao", porcao);
    listaPassos.forEach((item) => {
      data.append("passos", item);
    });
    listaIngredientes.forEach((item) => {
      data.append("ingredientes", item);
    });

    console.log(data);
    const response = await api.post("/receitas", data, config);
    dispatch({ type: "postReceita", payload: response.data });
    alert(response.data.msg);
    //navigate('Show')
  } catch (error) {
    console.log(error);
    const erro = error.response.data;
    alert(erro.error);
  }
};

export const { Provider, Context } = createDataContext(
  receitaReducer,
  { getAllReceitas, postReceita, getReceitaPesquisa },
  { msg: "" }
);
