import axios from "axios";
const instance = axios.create({
  baseURL: "https://85e69e43a552.ngrok.io",
});

export default instance;
