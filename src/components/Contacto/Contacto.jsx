import React from "react";
import styled from "styled-components";

const ContenedorContacto = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  height: 100%;
  margin-top: 80px;

  i {
    font-size: 30px;
    margin-bottom: 10px;
  }
  .contenedorlink {
    border-top: 1px solid cyan;
    padding: 30px;
  }

  .linkedin:hover {
    color: cyan;
  }

  .mail {
    font-size: 22px;
    border-bottom: 1px solid cyan;
    padding: 0 30px 30px 30px;
  }
`;

const Contacto = () => {
  return (
    <>
      <h1>Contacto</h1>
      <ContenedorContacto>
        <div className="contenedorlink">
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/wendy-wettel-79a60a1a7/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i> Wendy Wettel
          </a>
        </div>
        <div className="mail">
          <i className="fas fa-envelope-square"></i> wenwettel@gmail.com
        </div>
      </ContenedorContacto>
    </>
  );
};

export default Contacto;
