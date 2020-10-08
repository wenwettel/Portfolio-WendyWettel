import React from "react";
import foto from "images/foto-perfil.jpg";

const Main = () => {
  return (
    <div class="contenido">
      <div class="contenedor-foto">
        <img id="foto" src={foto} alt="foto" />
      </div>
      <div class="bienvenida">
        <h1 class="titulo">Hola!!</h1>
        <h2>Bienvenido/a a mi Portafolio y Primer Proyecto</h2>
        <p>
          Estoy encantada de compartir mis primeros pasos en el mundo del
          desarrollo web y poder mostrar un poco de todo lo que he venido
          aprendiendo.
        </p>
        <div class="boton-viaje">
          <a href="#">Feliz viaje a mi mente...</a>
        </div>
      </div>
    </div>
  );
};

export default Main;
