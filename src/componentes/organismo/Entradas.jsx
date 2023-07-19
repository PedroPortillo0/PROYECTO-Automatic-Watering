import InputText from "../atomos/InputTexs"
import { InputPass } from "../atomos/InputPassword"
export function Entradas (){
    return (
        <div className="flex flex-col gap-y-14">
             <InputText name= "Correo: "/>
             <InputPass name="contraseña"/>
        </div>
    )
}