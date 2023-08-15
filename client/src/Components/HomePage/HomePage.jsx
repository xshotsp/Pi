import React, { useEffect, useState } from "react";
import CardRecipe from "../Recipe Card/RecipeCard";
import s from "./homepage.module.css";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import Paginacion from "../Pagination/Pagination";
import Loading from "../Loading/Loading";
import { orderRecipes, filterRecipes,recipesDB,recipesLocales,recipes } from "../../Redux/actions/actions";

export function Home() {
  const dispatch = useDispatch();
  const [loading,setLoading]=useState(false);
  const [recipesLoaded, setRecipesLoaded] = useState(true);

  const handleDispatch = async(e) => {
    setLoading(true)
    const { name, value } = e.target;
    if(value==="All diets")return dispatch(recipes())
    if(value==="Locales")return dispatch(recipesLocales())
    if(value==="Created")return dispatch(recipesDB())
    

    if (name === "order") return dispatch(orderRecipes(value));
    if (name === "filter") return dispatch(filterRecipes(value));

  };

  const recipesAll = useSelector((state) => state.recipesAll);

  const diets = useSelector((state) => state.diets);

  const [page, setPage] = useState(1);
  const perPage = 9
  const maxPage = Math.ceil(recipesAll.length / perPage);


  useEffect(()=>{
    if(recipesAll.length===0){
      setLoading(false)
    }else{
      setLoading(false)
    }
  },[recipesAll]);

  const handleSearch=()=>{
    setPage(1)
  }

  return (
    <div className={s.container}>

<SearchBar handleSearch={handleSearch}/>

<div className={s.filters}>
        <select name="order" onChange={handleDispatch}>
          <option value="Default">Default</option>
          <option value="Asendente">Ascendente</option>
          <option value="Desendente">Descendente</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
          <option value="Max health score">Max health score </option>
          <option value="Min health score">Min health score</option>
        </select>
        <select name="filter" onChange={handleDispatch}>
          <option value="All diets">All diets</option>
          <option value="Locales">API</option>
          <option value="Created">Database</option>
          {diets&&diets.map(cur=>{
            return <option value={cur} key={cur}>{cur}</option>
          })}
        </select>
        
      </div>

      {(loading)?<Loading/>:null}
      <div className={s.content_cards}>
        {recipesAll.length === 0|| typeof recipesAll==='string'||typeof recipesAll[recipesAll.length-1]==='string'
          ? <h1>Not result</h1>
          : recipesAll.length>0?
              recipesAll.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
              .map((cur) => (
                <CardRecipe
                  key={cur.id}
                  image={cur.image}
                  name={cur.name}
                  diets={cur.diets}
                  id={cur.id}
                  summary={cur.summary}
                  healthScore={cur.healthScore}
                  steps={cur.analyzedInstructions}
                />
              )):<h1>Not result</h1>}
      </div>
      <Paginacion maxPage={maxPage} page={page} setPage={setPage} />
    </div>
  );
}