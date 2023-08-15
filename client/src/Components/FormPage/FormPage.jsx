import React, { useState } from "react";
import s from "./formPage.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createRecipe } from "../../Redux/actions/actions";

const FormPage = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    summary: "",
    healthScore: "",
    steps: "",
    image: "",
    diets: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    summary: "",
    healthScore: "",
    steps: "",
    image: "",
    diets: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasErrors = false;
    const newErrors = {};

    if (formData.name === "") {
      hasErrors = true;
      newErrors.name = "Nombre es requerido";
    }

    if (formData.summary === "") {
      hasErrors = true;
      newErrors.summary = "Resumen del plato es requerido";
    }

    if (formData.healthScore === "") {
      hasErrors = true;
      newErrors.healthScore = "Nivel de comida saludable es requerido";
    }

    if (formData.steps === "") {
      hasErrors = true;
      newErrors.steps = "Paso a paso es requerido";
    }

    if (formData.image === "") {
      hasErrors = true;
      newErrors.image = "Imagen es requerida";
    }

    if (formData.diets.length === 0) {
      hasErrors = true;
      newErrors.diets = "Debe seleccionar al menos una dieta";
    }

    if (hasErrors) {
      setErrors(newErrors);
    } else {
      dispatch(createRecipe(formData));
      setFormData({
        name: "",
        summary: "",
        healthScore: "",
        steps: "",
        image: "",
        diets: [],
      });
      setErrors({});
    }
  };

  return (
    <div className={s.container}>
      <h1>Crear Nueva Receta</h1>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.formGroup}>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p className={s.error}>{errors.name}</p>}
        </div>

        <div className={s.formGroup}>
          <label htmlFor="summary">Resumen del Plato</label>
          <textarea id="summary" name="summary" value={formData.summary} onChange={handleChange} />
          {errors.summary && <p className={s.error}>{errors.summary}</p>}
        </div>

        <div className={s.formGroup}>
          <label htmlFor="healthScore">Nivel de Comida Saludable (Health Score)</label>
          <input type="number" id="healthScore" name="healthScore" value={formData.healthScore} onChange={handleChange} />
          {errors.healthScore && <p className={s.error}>{errors.healthScore}</p>}
        </div>

        <div className={s.formGroup}>
          <label htmlFor="steps">Paso a Paso</label>
          <textarea id="steps" name="steps" value={formData.steps} onChange={handleChange} />
          {errors.steps && <p className={s.error}>{errors.steps}</p>}
        </div>

        <div className={s.formGroup}>
          <label htmlFor="image">Imagen</label>
          <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} />
          {errors.image && <p className={s.error}>{errors.image}</p>}
        </div>

        <div className={s.formGroup}>
          <label htmlFor="diets">Tipos de Dieta</label>
          <select multiple id="diets" name="diets" value={formData.diets} onChange={handleChange}>
            <option value="dieta1">Dieta 1</option>
            <option value="dieta2">Dieta 2</option>
          </select>
          {errors.diets && <p className={s.error}>{errors.diets}</p>}
        </div>

        <button type="submit" className={s.submitButton}>
          Crear Receta
        </button>
        <Link to="/home" className={s.btnHome}>
        Volver a Home
      </Link>
        
      </form>
    </div>
  );
}

export default FormPage