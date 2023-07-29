import { Carrusel } from "../organismo/Carrosul";
import { Principal } from "../atomos/TituloPage";
import Scroll from "../organismo/Scroll";
import "../../estilos/InfoPlantas.css";

function InformacionPlantas() {
    return ( 
        <>
            {/* carrusel y bienvenida*/}
            <div className="text-gray-100 pt-9 fondo  ">
                    <Principal titulo = "Bienvenido"/>
                <div>
                    <Carrusel/>
                </div>
            </div>
            
            <div className="padre1"> {/*div padre*/}
                {/* informacion de la planta*/}
                <div className="hijo2"> 
                   <Scroll/>
                </div>
            </div>
        </>
    );
}
export default InformacionPlantas;