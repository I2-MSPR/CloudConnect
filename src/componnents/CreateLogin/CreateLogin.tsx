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

  return !generationMdp ? (
    <GenerationMdp setGenerationMdp={setGenerationMdp} />
  ) : (
    <Generation2FA setGenerationMdp={setGenerationMdp} />
  );
};
export default CreateLogin;
