import left from "../../assets/img/flechaDerecha.png";
import right from "../../assets/img/flechaIzquierda.png";
import { useState } from "react";
export const BotonAside = ({ cambiar, change }) => {
  return (
    <button
      className={`flex ${
        cambiar ? "flex-row" : "flex-row-reverse"
      } justify-center w-1/2 py-2 pr-4 pl-3 text-white border-2 border-white flex-r rounded-xl`}
    onClick={change}>
      <span className="w-11/12">
        {" "}
        {cambiar ? "Registrarse" : "inicio de seccion"}
      </span>
      <img src={cambiar ? left : right} alt="" />
    </button>
  );
};
