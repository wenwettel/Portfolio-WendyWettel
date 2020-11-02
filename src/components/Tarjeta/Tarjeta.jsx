import React from "react";
import ContenedorTarjeta from "./TarjetaStyle.js";

const Tarjeta = ({ img, titulo, descripcion, url }) => {
  return (
    <ContenedorTarjeta>
      <a target="_blank" rel="noopener noreferrer" href={url}>
        <img
          className="img-tarjeta"
          alt={titulo}
          src={require(`images/${img}`)}
        />

        <figcaption>
          <h3>{titulo}</h3>
          <p>{descripcion}</p>
        </figcaption>
      </a>
    </ContenedorTarjeta>
  );
};

export default Tarjeta;
