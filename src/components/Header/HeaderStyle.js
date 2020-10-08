import styled from "styled-components";

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  .fas {
    font-size: 28px;
    color: rgb(161, 139, 167);

    &:hover {
      cursor: pointer;
      color: rgb(29, 235, 235);
    }
  }

  .fa-bars {
    padding: 2rem;
    position: fixed;
    font-size: 30px;
  }

  .menu {
    list-style: none;
    height: 100%;
    position: fixed;
    top: -100%;
    background-color: black;
    transition: all 0.5s ease-in-out;
    width: 100%;
    padding-left: 2rem;
    padding-top: 2rem;
  }

  .menu ul li {
    margin: 1rem 0 1rem 4rem;
    list-style: none;
  }

  .menu ul li a {
    font-size: 20px;
    transition: all 0.5s ease;
  }
  .menu ul li:hover a {
    padding-left: 1rem;
    border-bottom: 0.8px solid var(--primario);
  }

  /*Clase Activo con Js*/
  .menu.activo {
    top: 0;
  }

  /*Mobile First */
  @media screen and (min-width: 700px) {
    .fas {
      display: none;
    }

    .menu {
      width: 100%;
      background-color: transparent;
      position: fixed;
      top: 0;
      height: auto;
      padding: 0;
    }

    .menu ul {
      width: 100%;
      display: flex;
      justify-content: center;
      background-color: black;
    }

    .menu ul li {
      padding: 1rem;
      margin: 1rem 0;
    }

    .menu ul li:hover a {
      padding-left: 0;
      border-bottom: 0.8px solid var(--primario);
    }
  }
`;

export default HeaderStyle;
