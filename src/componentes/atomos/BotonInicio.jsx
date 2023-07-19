import "../../estilos/personalizado.css";
export const BotonInicio = ({ name, espace, change }) => {
  return (
    <button
      type="button"
      className={`mt-${espace} celeste_1 text-black w-48 py-1 rounded-md`}
      onClick={change}
    >
      {name}
    </button>
  );
};
