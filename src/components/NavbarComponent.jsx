import CartWidget from "./CartWidget";

const NavbarComponent = () => {
  return (
    <nav className="navContainer">
      {/* Logo a la izquierda */}
      <img src="/logo.svg" alt="Logo" className="logo" />

      {/* Enlaces alineados a la derecha */}
      <div className="navLinks">
        <a href="#" className="alink">
          Productos
        </a>
        <a href="#" className="alink">
          Más vendidos
        </a>

        <a href="#" className="alink">
          Contacto
        </a>
        <a href="#" className="alink">
          Ofertas
        </a>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavbarComponent;
