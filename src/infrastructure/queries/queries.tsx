import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchGroups } from "../fetch/fetchUser";
import type { User } from "../models/User";

export const getUser = (username: string, password: string) =>
  useQuery({
    queryKey: ["user"],
    queryFn: () => fetchGroups(username, password),
  });

export const useQueryUserCache = () => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData<User>(["user"]);
};
