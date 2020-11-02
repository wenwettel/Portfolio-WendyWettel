import React from "react";
import Tarjeta from "components/Tarjeta";
import styled from "styled-components";

const ContenedorProyectos = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Proyecto = ({ proyectos }) => {
  return (
    <ContenedorProyectos>
      {proyectos.map((proyecto) => (
        <Tarjeta
          key={proyecto.id}
          img={proyecto.img}
          titulo={proyecto.titulo}
          descripcion={proyecto.descripcion}
          url={proyecto.url}
        />
      ))}
    </ContenedorProyectos>
  );
};

export default Proyecto;
