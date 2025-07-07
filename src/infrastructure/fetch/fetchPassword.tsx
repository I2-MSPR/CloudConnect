import axios from "axios";
import type { Qrcode } from "../models/Qrcode";

export const fetchPassword = async (username: string): Promise<Qrcode> => {
  const response = await axios.get<Qrcode>(
    `http://localhost:8080/function/generate-password.openfaas-fn?username=${username}`
  );
  return response.data;
};
