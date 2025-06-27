import QRCode from "react-qr-code";
import { useCheckUsernameMutation } from "../../infrastructure/mutation/useMutationUser";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { User } from "../../infrastructure/models/User";
import { CreateLoginContext } from "../../infrastructure/Context/useContext";
import { useContext } from "react";

const ConnectLogin = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<User>();

  const checkUsernameMutation = useCheckUsernameMutation(setError);
  const { setCreateLogin } = useContext(CreateLoginContext);
  const onSubmit: SubmitHandler<User> = async (data) => {
    await checkUsernameMutation.mutateAsync(data);
    console.log("Identifiants valides");
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
        <input
          type="password"
          {...register("password", { required: "Le mot de passe est requis." })}
          placeholder="Entrez votre mot de passe"
        />
        {errors.password && (
          <p style={{ color: "red", marginTop: "0.5rem" }}>
            {errors.password.message}
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
          disabled={checkUsernameMutation.isPending}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          {checkUsernameMutation.isPending ? "Vérification..." : "Se connecter"}
        </button>
      </form>
      <a onClick={() => setCreateLogin(true)}>Creer un compte</a>
    </div>
  );
};
export default ConnectLogin;
