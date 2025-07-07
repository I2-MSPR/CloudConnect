import { useMutation } from "@tanstack/react-query";
import type { UseFormSetError } from "react-hook-form";
import { CreatePasswordContext } from "../Context/useContext";
import { useContext } from "react";
import { fetchPassword } from "../fetch/fetchPassword";
import type { Qrcode } from "../models/Qrcode";

type FormValues = {
  username: string;
};

export function useCheckPasswordMutation(setError: UseFormSetError<any>) {
  const { setQrcode } = useContext(CreatePasswordContext);
  return useMutation({
    mutationFn: async ({ username }: FormValues): Promise<Qrcode> => {
      return await fetchPassword(username);
    },
    onSuccess: (data: Qrcode) => {
      setQrcode(data.qrcode);
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
