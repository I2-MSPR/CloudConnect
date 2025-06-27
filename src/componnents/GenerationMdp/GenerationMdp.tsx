import { useContext } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import QRCode from "react-qr-code";
import { CreateLoginContext } from "../../infrastructure/Context/useContext";
import type { User } from "../../infrastructure/models/User";
import { useCheckUsernameMutation } from "../../infrastructure/mutation/useMutationUser";

type GenerationMdpProps = {
  setGenerationMdp: React.Dispatch<React.SetStateAction<boolean>>;
};

const GenerationMdp = ({ setGenerationMdp }: GenerationMdpProps) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<User>();

  const checkUsernameMutation = useCheckUsernameMutation(setError);

  const onSubmit: SubmitHandler<User> = async (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <input
          {...register("username", {
            required: "Le nom d'utilisateur est requis.",
          })}
          placeholder="Username"
        />
        {errors.username && (
          <p style={{ color: "red", marginTop: "0.5rem" }}>
            {errors.username.message}
          </p>
        )}
        <div
          style={{
            height: "auto",
            margin: "0 auto",
            maxWidth: 100,
            width: "100%",
          }}
        >
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={"https://www.npmjs.com/package/react-qr-code"}
            viewBox={`0 0 256 256`}
          />
        </div>

        <button
          type="submit"
          disabled={checkUsernameMutation.isPending}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {checkUsernameMutation.isPending ? "Vérification..." : "Génération"}
        </button>
      </form>
      <a onClick={() => setGenerationMdp(true)}>Generation2FA</a>
    </div>
  );
};
export default GenerationMdp;
