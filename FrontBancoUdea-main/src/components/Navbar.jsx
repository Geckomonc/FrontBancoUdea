import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link> |{" "}
      <Link to="/clientes">Agregar Clientes</Link> |{" "}
      <Link to="/verclientes">Ver Clientes</Link> |{" "}
      <Link to="/transferencias">Transferencias</Link> |{" "}
      <Link to="/historial">Historial</Link>
    </nav>
  );
}