
export function Diapositiva(Props){
 
    return (
        <div>
          <div><img src={Props.ruta}/></div>
          <p>{Props.titulo}</p>
        </div>
    )
}