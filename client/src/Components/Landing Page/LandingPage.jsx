import React from "react";
import style from "./landingPage.module.css";
import { useNavigate } from "react-router-dom"; // Asegúrate de importar useNavigate

const LandingPage = () => {
  const navigate = useNavigate(); // Usar useNavigate

  const handleHomeButtonClick = () => {
    navigate("/home"); // Navegar al Home
  };

  return (
    <div className={style["landing-page"]}>
      <div className={style["content"]}>
        <h1>Bienvenido a la Recetas App</h1>
        <p>Encuentra deliciosas recetas para todos los gustos.</p>
        <button className={style["btn-home"]} onClick={handleHomeButtonClick}>
          Home
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
