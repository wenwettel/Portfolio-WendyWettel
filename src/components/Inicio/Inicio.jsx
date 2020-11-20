import React from "react";
import foto from "images/foto-perfil.jpg";
import InicioStyle from "./InicioStyle.js";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <InicioStyle>
      <div className="contenedor-foto">
        <img id="foto" src={foto} alt="foto" />
      </div>
      <div className="bienvenida">
        <h1 className="titulo">Hola!!</h1>
        <h2>Bienvenid@ a mi Portafolio </h2>
        <p>
          Aquí encontrarás los proyectos más destacados de lo que he venido
          haciendo. Actualmente trabajo en modo "Freelance" prestando servicios
          de Desarrollo Web.
        </p>
        <p>Mi filosofia es: "En los detalles esta la magía".</p>
        <div className="boton-viaje">
          <Link to="/mitrabajo">Feliz viaje a mi mente...</Link>
        </div>
      </div>
    </InicioStyle>
  );
};

export default Inicio;
