
export function Diapositiva({ruta,titulo,efecto}){
 
    return (
        <div className={`w-full flex flex-row flex-wrap md:flex-nowrap justify-center items-center ${ efecto ? "slide-top":"slide-top-2"}`}>
          <div className="w-full h-96 flex"><img src={ruta} className="block"/></div>
          <p className="w-full text-center bg-transparent text-white italic">{titulo}</p>
        </div>
    )
}