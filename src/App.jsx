import { InputPass } from "./componentes/atomos/InputPassword"
import { Titulo } from "./componentes/atomos/Titulo"
import  InputTexs  from "./componentes/atomos/InputTexs"

export function App (){

  return ( 
    <>
     <Titulo name = "Inicio de Seccion "/>
        <InputPass name = "contrasena: "/>
        <InputTexs/>
      </>     
  )
} 
