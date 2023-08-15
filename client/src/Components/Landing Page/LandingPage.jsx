import React from "react";
import style from "./landingPage.module.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className={style["landing-page"]}>
      <div className={style["content"]}>
        <h1>Bienvenido a la Recetas App</h1>
        <p>Encuentra deliciosas recetas para todos los gustos.</p>
        <Link to="/home" className={style["btn-enter"]}>
          Home
        </Link>
      </div>
      <footer>Desarrollado por Juan Esteban Gallego Bedoya</footer>
    </div>
  );
};

export default LandingPage;
