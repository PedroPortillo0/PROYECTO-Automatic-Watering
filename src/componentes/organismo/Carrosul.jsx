import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Diapositiva } from '../moleculas/Diapositiva';
import { informacion } from '../../js/InformacionPlants';
import { useState,useEffect } from 'react';

export function Carrusel(){
    const [arreglo, setarreglo] = useState([]);
    const [indice,setIndice] = useState(0);
       useEffect(() => {
         
          setarreglo(informacion())
         
       }, [])
       
     
     return (<div>
         <button>atras</button>
         <div>
            <Diapositiva ruta = {arreglo[indice].url} text = {arreglo[indice].text}/>
            </div>
            <button>siguiente</button>
     </div>)
    
}