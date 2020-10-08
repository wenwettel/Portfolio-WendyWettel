import React, { useState } from "react";
import HeaderStyle from "./HeaderStyle.js";

const Header = () => {
  const [menu, cambiarMenu] = useState(false);

  const mostrarMenu = () => {
    cambiarMenu(!menu);
  };

  return (
    <>
      <HeaderStyle>
        <div className="navegacion">
          <i className="fas fa-bars" onClick={mostrarMenu}></i>

          <nav className={`menu ${menu ? "activo" : ""}`}>
            <i className="fas fa-stream" onClick={mostrarMenu}></i>

            <ul>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Mi Trabajo</a>
              </li>
              <li>
                <a href="#">Sobre Mi</a>
              </li>
              <li>
                <a href="#">Habilidades</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>
      </HeaderStyle>
    </>
  );
};

export default Header;
