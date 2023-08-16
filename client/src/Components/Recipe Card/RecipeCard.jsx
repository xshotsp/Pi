import React from 'react';
import s from './recipeCard.module.css';
import { useNavigate } from 'react-router-dom';

export default function CardRecipe(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail/${props.id}`, { replace: true });
  };

  return (
    <div className={s.container} onClick={handleClick}>
      <h3 className={s.content_name}>{props.name}</h3>
      <div className={s.content_img_diets}>
        <div className={s.content_img}>
          <img src={props.image} alt={props.name} />
        </div>
        <div className={s.content_info}>
          <div className={s.content_health}>
            <h6>Health Score</h6>
            <p>{props.healthScore}</p>
          </div>
          <div className={s.content_diets}>
            <h3>Diets</h3>
            <ul>
              {props.diets.map((cur) => (
                <li key={cur}>{cur}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
