import { AsideImage } from "../organismo/AsideImage"
import {FormInicio} from "../organismo/formInicio"
import { useState } from "react"
import "../../estilos/personalizado.css"
export function IniciarSeccion (){
   const [cambiar, setcambiar] = useState(true);

   const change = ()=>{
      setcambiar(!cambiar)
      console.log("cambiar")
   }
  return ( 
    <div className={`flex ${cambiar ? "flex-row":"flex-row-reverse"} `}>
      <FormInicio cambiar = {cambiar} />
      <AsideImage cambiar = {cambiar} change={change}/>
      </div>     
  )
} 