import { Diapositiva } from '../moleculas/Diapositiva';
import { informacion } from '../../js/InformacionPlants';
import { useState, useEffect } from 'react';

export function Carrusel() {
  const [arreglo, setarreglo] = useState([]);
  const [indice, setIndice] = useState(0); 
   const [efecto, setefecto] = useState(true);
  useEffect(() => {
    setarreglo(informacion());
  }, []);

  const controlarIndice = () => {
    if (indice >= arreglo.length - 1) {
      setIndice(0);
    } else {
      setIndice(indice + 1);
    }
    setefecto(!efecto)
  };

  const controlarIndiceR = () => {
   if (indice <= 0) {
     setIndice(2);
   } else {
     setIndice(indice - 1);
     setefecto(!efecto)
   }
 };

  return (
    <div className='w-full  flex flex-row justify-center items-center gap-x-10 py-10 mt-10'>
      <button className='bg-gray-200 w-20 h-20 rounded-full text-black text-2xl font-bold' onClick={controlarIndiceR}>{"<"}</button>
      <div>
        {arreglo.length > 0 && (
          <Diapositiva ruta={arreglo[indice].url} titulo={arreglo[indice].text} efecto = {efecto} />
        )}
      </div>
      <button onClick={controlarIndice} className='bg-gray-200 w-20 h-20 rounded-full text-black text-2xl font-bold'>{">"}</button>
    </div>
  );
}