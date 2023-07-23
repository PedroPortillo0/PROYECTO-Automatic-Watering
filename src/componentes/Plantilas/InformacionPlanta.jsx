import { Carrusel } from "../organismo/Carrosul";
import { Principal } from "../atomos/TituloPage";


function InformacionPlantas() {
    return ( 
        <>
            {/* carrusel y bienvenida*/}
            <div className="text-gray-100 pt-5 fondo ">
    
                    <Principal titulo = "Bienvenido"/>
           
                <div>
                    <Carrusel/>
                </div>
            </div>
            {/* informacion de la planta*/}
            <div>
                
            </div>
            {/* pie de pagina*/}
            <div>

            </div> 
        </>
    );
}

export default InformacionPlantas;