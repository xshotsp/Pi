import React from "react";
import s from "./about.module.css";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className={s.containert}>
      <h1>Foods</h1>
      <div className={s.content_data}>
        
        <p>
          Bienvenido a mi Proyecto Individual desarrollado de la mano de Henry con la tematica de foods Creamos una plataforma web centrada en el mundo culinario, aprovechando la API de Spoonacular para brindar una experiencia única. Nuestra aplicación permite explorar diversas recetas, facilitando el filtrado y ordenamiento de las mismas según preferencias. Además, incorporamos una función de búsqueda que encuentra platos por su nombre, sin importar si están en mayúsculas o minúsculas.

          Una característica destacada es la sección de detalles, donde los usuarios pueden acceder a información más completa sobre cada receta. Además, diseñamos un componente especialmente pensado para que los usuarios puedan contribuir a la plataforma creando sus propias recetas. Estas recetas son registradas en nuestra base de datos, enriqueciendo la diversidad de opciones culinarias.
          
          Para mejorar la navegación, implementamos un sistema de paginado que facilita explorar las recetas de manera organizada. En resumen, hemos desarrollado una aplicación culinaria que abarca desde la búsqueda hasta la creación de recetas, brindando a los usuarios una experiencia gastronómica completa y atractiva.
        </p>
        <hr />
    
         <p>En la creación de la aplicación de página única (SPA), he empleado una serie de tecnologías clave para lograr su funcionalidad y rendimiento óptimos. Entre las herramientas utilizadas se encuentran React, React-Router-dom, Redux, Express, Jest, SQL, Sequelize, Node.js y PostgreSQL. Estas tecnologías han sido cuidadosamente seleccionadas y combinadas para asegurar una experiencia fluida y eficiente para los usuarios, al tiempo que brindan una base sólida para el desarrollo y la gestión de datos.
        </p>
        <div className={s.logos}>
        </div>
        <Link to="/home">
        <button className={s.btnHome}>Home</button>
      </Link>
      </div>
    </div>
  );
}