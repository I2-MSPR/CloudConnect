import { CreateLoginContext } from "../../infrastructure/Context/useContext";
import { useContext } from "react";
import "./generation.css";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getMfa } from "../../infrastructure/queries/QueryMfa";

type Generation2FAProps = {
  setGenerationMdp: React.Dispatch<React.SetStateAction<boolean>>;
  user: string;
};

const Generation2FA = ({ setGenerationMdp, user }: Generation2FAProps) => {
  const { createLogin, setCreateLogin } = useContext(CreateLoginContext);

  const { data, isSuccess } = useSuspenseQuery(getMfa(user));
  return (
    <div className="generation-2fa">
      <h1>Génération de la 2FA</h1>

      <a onClick={() => setGenerationMdp(false)}>
        Retour generation mot de passe
      </a>
      {isSuccess ? <img src={`data:image/png;base64,${data.qrcode}`} /> : null}

      <a onClick={() => setCreateLogin(!createLogin)}>Retour login</a>
    </div>
  );
};
export default Generation2FA;
