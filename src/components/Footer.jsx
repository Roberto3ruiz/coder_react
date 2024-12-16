import React from 'react'
import '../estilos/Footer.css';

const Footer = () => {
    return (
      <footer className="footer">
        <p>© 2024 Roberto Ramirez Ruiz. Todos los derechos reservados.</p>
        <ul className="footer-links">
          <li><a href="/privacy">Política de Privacidad</a></li>
          <li><a href="/terms">Términos de Servicio</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </footer>
    );
  };
  
  export default Footer;