import { useContext, useState } from "react";
import { CreateLoginContext } from "../../infrastructure/Context/useContext";
import { useForm, type SubmitHandler } from "react-hook-form";
import QRCode from "react-qr-code";
import type { User } from "../../infrastructure/models/User";
import { useCheckUsernameMutation } from "../../infrastructure/mutation/useMutationUser";
import GenerationMdp from "../GenerationMdp";
import Generation2FA from "../Generation2FA/Generation2FA";

const CreateLogin = () => {
  const [generationMdp, setGenerationMdp] = useState<boolean>(false);
  const [user, setUser] = useState<string>("");
  
  return !generationMdp ? (
    <GenerationMdp setGenerationMdp={setGenerationMdp} setUser={setUser}/>
  ) : (
    <Generation2FA setGenerationMdp={setGenerationMdp} user={user} />
  );
};
export default CreateLogin;
