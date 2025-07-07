import axios from "axios";
import type { User } from "../models/User";

export const fetchGroups = async (
  username: string,
  password: string
): Promise<User> => {
  const response = await axios.get<User>(
    `http://34.118.254.31:8080/function/hello?username=${username}&password=${password}`
  );
  return response.data;
};
