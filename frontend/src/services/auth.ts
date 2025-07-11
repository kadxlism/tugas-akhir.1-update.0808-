// src/api/auth.ts
import axios from "./axios";

export const login = async (email: string, password: string) => {
  await axios.get("/sanctum/csrf-cookie"); // Wajib sebelum login
  return axios.post("/login", { email, password });
};

export const logout = async () => {
  return axios.post("/logout");
};

export const getUser = async () => {
  return axios.get("/test-session"); // Cek sesi login
};

export const register = async (data: {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  role: string;
}) => {
  await axios.get("/sanctum/csrf-cookie");
  return axios.post("/api/register", data);
};
