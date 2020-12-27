import axios from "axios";
const instance = axios.create({
  baseURL: "http://6d2ee0b4860e.ngrok.io",
});

export default instance;
