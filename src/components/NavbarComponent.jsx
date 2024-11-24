import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavbarComponent = () => {
  return (
    <nav className="navContainer">
      {/* Logo a la izquierda */}
      <img src="/logo.svg" alt="Logo" className="logo" />

      {/* Enlaces alineados a la derecha */}
      <div className="navLinks">
        <NavLink to='/' className="alink">   Carreras  </NavLink>
        <NavLink to='/amateur' className="alink"> Amateur </NavLink>
      
        <NavLink to='/profesional' className="alink"> Profesional</NavLink>
        
        <NavLink to='/familiar' className="alink">Familiar</NavLink>
        
        <a href="#" className="alink"> Contacto  </a>
         
      
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavbarComponent;
