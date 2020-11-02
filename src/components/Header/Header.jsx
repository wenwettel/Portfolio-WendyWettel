import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderStyle from "./HeaderStyle.js";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const mostrarMenu = () => {
    setMenu(!menu);
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
                <Link onClick={mostrarMenu} to="/">inicio</Link>
              </li>
              <li>
                <Link onClick={mostrarMenu} to="/mitrabajo">mi trabajo</Link>
              </li>
              <li>
                <Link onClick={mostrarMenu} to="/sobremi">sobre mi</Link>
              </li>
              <li>
                <Link onClick={mostrarMenu} to="/habilidades">habilidades</Link>
              </li>
              <li>
                <Link onClick={mostrarMenu} to="/contacto">contacto</Link>
              </li>
            </ul>
          </nav>
        </div>
      </HeaderStyle>
    </>
  );
};

export default Header;
