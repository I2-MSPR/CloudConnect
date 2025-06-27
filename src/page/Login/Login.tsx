import "./login.css";
import { useContext, useState } from "react";
import CreateLogin from "../../componnents/CreateLogin";
import ConnectLogin from "../../componnents/ConnectLogin";
import { CreateLoginContext } from "../../infrastructure/Context/useContext";
const Login = () => {
  const { createLogin } = useContext(CreateLoginContext);

  return !createLogin ? <ConnectLogin /> : <CreateLogin />;
};

export default Login;
