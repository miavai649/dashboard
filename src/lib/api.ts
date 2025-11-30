import api from "./axios";

export const registerUser = async (userData: { name: string; email: string; password: string }) => {
  const response = await api.post("/auth/register", userData);
  console.log("👀 ~ registerUser ~ response:", response);
  return response.data;
};
