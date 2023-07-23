import { Carrusel } from "../organismo/Carrosul";
import { Principal } from "../atomos/TituloPage";


function InformacionPlantas() {
    return ( 
        <>
            {/* carrusel y bienvenida*/}
            <div>
                <div>
                    <Principal titulo = "Bienvenido"/>
                </div>
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