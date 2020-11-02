import styled from "styled-components";

const ContenedorTarjeta = styled.figure`
  width: 300px;
  height: 223px;
  margin-right: 30px;
  margin-bottom: 30px;
  position: relative;

  .img-tarjeta {
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
    width: 80%;
  }

  &:hover .img-tarjeta {
    opacity: 0.15;
  }

  &:hover figcaption {
    opacity: 1;
  }
`;

export default ContenedorTarjeta;
