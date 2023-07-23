import "../../estilos/InfoPlantas.css";
import { Principal } from "../atomos/TituloPage";


function InformacionPlantas() {
    return ( 
        <>
            <div className="padre">
                {/* carrusel y bienvenida*/}
                <div className="hijo1">
                    <div>
                        <Principal titulo = "Bienvenido"/>
                    </div>
                    <div>
                        
                    </div>
                </div>
                {/* informacion de la planta*/}
                <div className="hijo2">
                    <h1>hola hijo 2</h1>
                </div>
                {/* pie de pagina*/}
                <div className="hijo3">
                    <h1>hio3</h1>
                </div> 

            </div> 
        </>
    );
}

export default InformacionPlantas;