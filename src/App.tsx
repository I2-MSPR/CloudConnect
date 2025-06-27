import "./App.css";
import Login from "./page/Login";
import { useContext } from "react";
import { Connected } from "./infrastructure/Context/useContext";
import Accueil from "./page/Acceuil";

function App() {
  const { connected } = useContext(Connected);
  return !connected ? <Login /> : <Accueil />;
}
export default App;
