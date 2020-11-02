import styled from "styled-components";

const InicioStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .titulo {
    text-align: left;
  }

  .contenedor-foto {
    height: 25%;
    width: 30%;
  }

  #foto {
    height: auto;
    width: 100%;
    border-radius: 60%;
  }

  .bienvenida {
    margin-top: 2rem;
    padding: 0 1rem;
    line-height: 30px;
  }

  .boton-viaje {
    margin: 3rem 0 0 9rem;
  }

  @media screen and (min-width: 700px) {
    flex-direction: row;
    width: 70%;
    margin: 0 auto;
  }
`;

export default InicioStyle;
