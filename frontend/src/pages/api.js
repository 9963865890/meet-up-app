import axios from "axios";

export const API = axios.create({
  baseURL: "https://meet-up-app-tzo1.vercel.app/api"
});