import axios from "axios";

const API = "http://localhost:5000/api";

export const getHistory = async () => {
  const response = await axios.get(`${API}/history`, {
  headers: {
    "Cache-Control": "no-cache",
  },
});
  return response.data;
};

export const deleteHistoryImage = async (id) => {
  const response = await axios.delete(`${API}/delete/${id}`);
  return response.data;
};