import React from "react";
import styled from "styled-components";

const ContenedorTarjeta = styled.figure`
  width: 300px;
  height: 223px;
  margin-right: 30px;
  margin-bottom: 30px;
  position: relative;

  .img-tarjeta {
    width: 100%;
    height: auto;
    border-radius: 10px;
    opacity: 1;
    display: block;
    transition: 0.5s ease;
  }

  figcaption {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  &:hover .img-tarjeta {
    opacity: 0.15;
  }

  &:hover figcaption {
    opacity: 1;
  }
`;

const Tarjeta = ({ img, titulo, descripcion, url }) => {
  return (
    <ContenedorTarjeta>
      <a target="_blank" rel="noopener noreferrer" href={url}>
        <img
          className="img-tarjeta"
          alt={titulo}
          src={require(`images/${img}`)}
        />
      </a>
      <figcaption>
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
      </figcaption>
    </ContenedorTarjeta>
  );
};

export default Tarjeta;
