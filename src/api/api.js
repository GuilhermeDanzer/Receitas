import axios from "axios";
const instance = axios.create({
  baseURL: "https://c5787b69ebca.ngrok.io",
});

export default instance;
