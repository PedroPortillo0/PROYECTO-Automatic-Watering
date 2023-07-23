import logo from "../../assets/img/logo.png";
import "../../estilos/personalizado.css";
import { BotonAside } from "../atomos/BotonAside";
export const AsideImage = ({ cambiar, change }) => {
  return (
    //fondo
    <div
      className={`flex flex-col items-center justify-center w-1/2 h-screen fondoVerde ${
        cambiar ? "deslizeI" : "deslizeD"
      }`}
    >
      <div>
        <img src={logo} alt="" />
      </div>

      <BotonAside cambiar={cambiar} change={change} />
    </div>
  );
};
