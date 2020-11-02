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
          Estoy encantada de compartir mis pasos en el mundo del desarrollo web
          y poder mostrar un poco de todo lo que he venido haciendo.
        </p>
        <div className="boton-viaje">
          <Link to="/mitrabajo">Feliz viaje a mi mente...</Link>
        </div>
      </div>
    </InicioStyle>
  );
};

export default Inicio;
