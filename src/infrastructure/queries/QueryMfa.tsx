import { useQuery } from "@tanstack/react-query";
import { fetchMfa } from "../fetch/fetchMfa";

export const getMfa = (username: string) => {
  return {
    queryKey: ["mfa"],
    queryFn: () => fetchMfa(username),
  };
};
