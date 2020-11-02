import React from "react";
import styled from "styled-components";

const ContenedorHabilidades = styled.div`
  padding: 0 65px;

  h4 {
    margin-bottom: 5px;
  }

  .contenedor-teconologias {
    margin: 20px 0;
    padding: 20px 0;
    border-right: 1px solid cyan;
    border-left: 1px solid cyan;
    border-radius: 60px;
  }

  .lista-tecnologia {
    padding-left: 20px;
    margin-bottom: 20px;
  }

  .lista-tecnologia li {
    list-style: none;
  }

  @media screen and (min-width: 700px) {
    .contenedor-teconologias {
      display: flex;
      justify-content: space-around;
      border: none;
      border-top: 1px solid cyan;
      border-bottom: 1px solid cyan;
    }

    .lista-tecnologia li {
      padding-left: 10px;
    }
  }
`;

const Habilidades = () => {
  return (
    <ContenedorHabilidades>
      <h1>Habilidades</h1>
      <p>
        A medida que te adentras en un proyecto y comienzan a surgir necesidades
        que debes cumplir, te das cuenta que si bien nos sentimos comodos en un
        lenguaje es necesario tener la versatilidad y agilidad de aprender a
        usar otros lenguajes, herramientas y métodos que nos pueden llevar de
        forma satisfactoria y en el tiempo promedio a cumplir con dichas
        necesidades.
      </p>
      <p>
        En pocas palabras cuento con: Comprension de necesidades, versatilidad,
        agilidad de aprendizanje...{" "}
      </p>
      <p>
        Y valores que no pueden faltar: Compromiso, responsabilidad y
        comunicacion efectiva...{" "}
      </p>
      <p>Entre las Tecnologias con las que he trabajo por ahora: </p>
      <div className="contenedor-teconologias">
        <ul className="lista-tecnologia">
          <h4>Lenguajes</h4>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript(ES6)</li>
          <li>PHP</li>
        </ul>
        <ul className="lista-tecnologia">
          <h4>Métodos y Herramientas </h4>
          <li>SASS</li>
          <li>Flexbox</li>
          <li>CSS Grid</li>
          <li>Git</li>
        </ul>
        <ul className="lista-tecnologia">
          <h4>Frameworks y Librerias</h4>
          <li>React</li>
          <li>Wordpress</li>
        </ul>
      </div>
    </ContenedorHabilidades>
  );
};

export default Habilidades;
