import { useContext } from "react";
import { Connected } from "../../infrastructure/Context/useContext";
import "./accueil.css";

const Accueil = () => {
  const { setConnected } = useContext(Connected);
  return (
    <div className="connecte">
      <span>TU ES CONNECTE</span>

      <button onClick={() => setConnected(false)}>DECONNECTE</button>
    </div>
  );
};
export default Accueil;
