import { useContext } from "react";
import { Connected } from "../../infrastructure/Context/useContext";

const Accueil = () => {
  const { setConnected } = useContext(Connected);
  return (
    <div>
      <span>TU ES CONNECTE</span>
      <button onClick={() => setConnected(false)}>DECONNECTE</button>
    </div>
  );
};
export default Accueil;
