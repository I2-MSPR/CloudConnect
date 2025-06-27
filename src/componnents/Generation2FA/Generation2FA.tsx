import { CreateLoginContext } from "../../infrastructure/Context/useContext";
import { useContext } from "react";
import "./generation.css";

type Generation2FAProps = {
  setGenerationMdp: React.Dispatch<React.SetStateAction<boolean>>;
};

const Generation2FA = ({ setGenerationMdp }: Generation2FAProps) => {
  const { createLogin, setCreateLogin } = useContext(CreateLoginContext);
  return (
    <div className="generation-2fa">
      <h1>Génération de la 2FA</h1>
      <p>
        Veuillez suivre les instructions pour configurer votre authentification
        à deux facteurs.
      </p>
      <a onClick={() => setGenerationMdp(false)}>
        Retour generation mot de passe
      </a>
      <a onClick={() => setCreateLogin(!createLogin)}>Retour login</a>
    </div>
  );
};
export default Generation2FA;
