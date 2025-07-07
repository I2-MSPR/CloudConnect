import { useForm, type SubmitHandler } from "react-hook-form";
import type { User } from "../../infrastructure/models/User";
import { useCheckPasswordMutation } from "../../infrastructure/mutation/useMutationPassword";
import { CreatePasswordContext } from "../../infrastructure/Context/useContext";
import { useContext } from "react";

type GenerationMdpProps = {
  setGenerationMdp: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};

const GenerationMdp = ({ setGenerationMdp, setUser }: GenerationMdpProps) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<User>();
  const checkPasswordMutation = useCheckPasswordMutation(setError);
  const { qrcode } = useContext(CreatePasswordContext);
  const onSubmit: SubmitHandler<User> = async (data) => {
    setUser(data.username);
    await checkPasswordMutation.mutateAsync(data);
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
        ></div>

        <button
          type="submit"
          disabled={checkPasswordMutation.isPending}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {checkPasswordMutation.isPending ? "Vérification..." : "Génération"}
        </button>
      </form>

      {checkPasswordMutation.isSuccess ? (
        <div>
          <img src={`data:image/png;base64,${qrcode}`} />
          <div>
            <a onClick={() => setGenerationMdp(true)}>Generation2FA</a>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default GenerationMdp;
