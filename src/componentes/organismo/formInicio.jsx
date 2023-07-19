import { Titulo } from "../atomos/Titulo";
import { Entradas } from "./Entradas";
import { BotonInicio } from "../atomos/BotonInicio";
import { EntradasR } from "./EntradasR";

export const FormInicio = ({ cambiar, change }) => {
  return (
    <div
      className={` justify-center flex flex-col items-center w-1/2 pt-14 gap-y-5 ${
        cambiar ? "deslizeD" : "deslizeI"
      }`}
    >
      <Titulo name={`${cambiar ? "Inicio de seccion" : "registrarse"}`} />
      <div className="w-1/2 mb-12 mt-28">
        {cambiar ? <Entradas /> : <EntradasR />}
      </div>

      <BotonInicio name="Entrar" espace={10} change={change} />
    </div>
  );
};
