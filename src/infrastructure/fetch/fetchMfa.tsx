import axios from "axios";
import type { Qrcode } from "../models/Qrcode";

export const fetchMfa = async (username: string): Promise<Qrcode> => {
  const response = await axios.get<Qrcode>(
    `http://localhost:8080/function/generate2fa.openfaas-fn?username=${username}`
  );
  return response.data;
};
