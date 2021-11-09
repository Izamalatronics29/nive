function Menú() {
    return (
        <ul>
            <MenuItem nombre="Inicio"/>
            <MenuItem nombre="Usuarios"/>
            <MenuItem nombre="Profesores"/>
            <MenuItem nombre="Alumnos"/>
        </ul>
    )
}
function MenuItem(props) {
    return (
        <li>{props.nombre}</li>
    )
}
export default Menú;