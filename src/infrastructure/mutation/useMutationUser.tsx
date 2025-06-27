import { useMutation } from "@tanstack/react-query";
import { fetchGroups } from "../queries/queries";
import type { UseFormSetError } from "react-hook-form";
import type { User } from "../models/User";
import { Connected } from "../Context/useContext";
import { useContext } from "react";

type FormValues = {
  username: string;
  password: string;
};

export function useCheckUsernameMutation(setError: UseFormSetError<any>) {
  const { setConnected } = useContext(Connected);
  return useMutation({
    mutationFn: async ({ username, password }: FormValues): Promise<User> => {
      const chiffreMotDePasse = btoa(password);
      console.log("Chiffrement du mot de passe :", chiffreMotDePasse);
      return await fetchGroups(username, chiffreMotDePasse);
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
