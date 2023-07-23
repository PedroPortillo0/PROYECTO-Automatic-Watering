import { BrowserRouter , Routes , Route, RouterProvider } from "react-router-dom";
import { IniciarSeccion } from "./componentes/Plantilas/IniciarSeccion"
import InformacionPlantas from "./componentes/Plantilas/InformacionPlanta"
export function App (){

  return ( 
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <IniciarSeccion/>}></Route>
    <Route path="/plantas" element={<InformacionPlantas/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
      
  )
} 
