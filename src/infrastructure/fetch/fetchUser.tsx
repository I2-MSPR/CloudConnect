import axios from "axios";
import type { User } from "../models/User";

export const fetchUser = async (
  username: string,
  password: string,
  mfa: string
): Promise<User> => {
  const response = await axios.get<User>(
    `http://127.0.0.1:8080/function/authenticator.openfaas-fn?username=${username}&password=${password}&otp_code=${mfa}`
  );
  return response.data;
};
