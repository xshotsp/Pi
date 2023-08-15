import React from 'react';
import s from './recipeCard.module.css';
import { useNavigate } from 'react-router-dom';


export default function CardRecipe(props) {
  const navigate=useNavigate();
  const handleClick=()=>{
     navigate(`/detail/${props.id}`,{ replace: true })
  }
  return (
      //<Link to={`/detail/${props.id}`} style={{ textDecoration: "none" }}>
    <div className={s.container} onClick={handleClick}>
      <h3 className={s.content_name} >{props.name}</h3>
      <div className={s.content_img_diets}>
        <div className={s.content_img}>
      <img src={props.image} />
      <h6>{props.healthScore}</h6>
      <h5>{props.id}</h5>
        </div>
      <div className={s.content_diets} > <h3>Diets:</h3>{props.diets.map(cur=> <h5 key={cur}>{cur}<br/></h5> )}</div>
      </div>
    </div>
     // </Link>
  )
}