import axios from "axios";
const instance = axios.create({
  baseURL: "https://99eee5abe8bf.ngrok.io",
});

export default instance;
