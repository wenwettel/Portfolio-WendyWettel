import React, { useState } from "react";
import Proyecto from "./Proyecto";
import styled from "styled-components";
import proyectos from "data/proyectos.json";

const Ulfiltros = styled.ul`
  display: grid;
  grid-template-columns:repeat(auto-fit,minmax(150px, 180px));
  justify-content:center;
  list-style: none;
  padding-left:35px;
  
  li {
    margin: 10px 0;
    font-family: var(--fuenteTitulos);
    padding: 10px;
    height: 43px;
    width: 87px;
    text-align: center;
    font-size:20px;

    &:hover {
      cursor: pointer;
      border: 0.5px solid cyan;
    }
  }

  @media screen and (min-width: 766px) {
    padding-left: 150px;
    justify-content: left;
    grid-template-columns:repeat(auto-fill,minmax(100px, 1fr));
  }
`;

const Trabajo = () => {
  const [proyectofilter, setproyectofilter] = useState(proyectos);

  const filtros = ["Todos", "CSS", "Vanilla", "ReactJS", "Landing"];

  const aplicarFiltro = (filtro) => {
    if (filtro !== "Todos") {
      const proyectoFiltrado = proyectos.filter((proyecto) => {
        return proyecto.tipos.includes(filtro.toLowerCase());
      });
      setproyectofilter(proyectoFiltrado);
    } else {
      setproyectofilter(proyectos);
    }
  };

  const mostrarFiltros = filtros.map((filtro) => {
    return <li onClick={() => aplicarFiltro(filtro)}>{filtro}</li>;
  });

  return (
    <>
      <h1>Proyectos</h1>
      <Ulfiltros>{mostrarFiltros}</Ulfiltros>
      <Proyecto proyectos={proyectofilter} />
    </>
  );
};

export default Trabajo;
