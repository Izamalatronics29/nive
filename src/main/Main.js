import Menú from "./menu/Menú";
import App from "../App"
import "./main.css";
function Main() {
    return(
        <div className="principal">
            <h2>Principal</h2>
            <App/>
            <Menú/>
            <ContenidoDerecho/>
        </div>
    )
}

function ContenidoDerecho() {
    return (
        <div className="contenido-derecho">
            <h2>Usuarios</h2>
            <div>aqui toda la información</div>
        </div>
    )
}
export default Main;