import api from "./axios";

export const registerUser = async (userData: { name: string; email: string; password: string }) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};

export const loginUser = async (credentials: { email: string; password: string }) => {
  const response = await api.post("/auth/login", credentials);
  return response.data;
};
