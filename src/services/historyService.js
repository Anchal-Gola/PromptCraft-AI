import axios from "axios";

const API = "http://localhost:5000/api";

export const getHistory = async () => {
  const response = await axios.get(`${API}/history`);
  return response.data;
};