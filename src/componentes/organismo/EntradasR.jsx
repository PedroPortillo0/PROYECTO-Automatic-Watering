import InputText from "../atomos/InputTexs"
import { InputPass } from "../atomos/InputPassword"
export function EntradasR (){
    return (
        //registro
        <div className="flex flex-col gap-y-14">
            <InputText name= "Nombre: "/>
             <InputText name= "Correo: "/>
             <InputPass name="contraseña"/>
        </div>
    )
}