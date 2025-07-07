import { useMutation } from "@tanstack/react-query";
import { fetchUser } from "../fetch/fetchUser";
import type { UseFormSetError } from "react-hook-form";
import type { User } from "../models/User";
import { Connected } from "../Context/useContext";
import { useContext } from "react";

type FormValues = {
  username: string;
  password: string;
  mfa: string;
};

export function useCheckUsernameMutation(setError: UseFormSetError<any>) {
  const { setConnected } = useContext(Connected);
  return useMutation({
    mutationFn: async ({
      username,
      password,
      mfa,
    }: FormValues): Promise<User> => {
      const chiffreMotDePasse = btoa(password);

      return await fetchUser(username, chiffreMotDePasse, mfa);
    },
    onSuccess: () => {
      setConnected(true);
      console.log("Connexion réussie !");
    },
    onError: (error: any) => {
      if (error.response?.status === 404) {
        setError("username", {
          type: "manual",
          message: "Utilisateur non trouvé.",
        });
      } else {
        setError("username", {
          type: "manual",
          message: "Erreur réseau ou serveur.",
        });
      }
    },
  });
}
