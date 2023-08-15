import {
    ALL_RECIPES,
    DETAIL_ID,
    ORDER_RECIPES,
    FILTER_RECIPES,
    SEARCH_RECIPE_NAME,
    CREATE_RECIPE,
    DIETS,
    RECIPES_DB,
    LOCALES_RECIPES
  } from "./actionTypes";
  import axios from "axios";
  
  export function recipes() {
    return async function (dispatch) {
      try {
        const result = await axios.get("/recipes");
        dispatch({
          type: ALL_RECIPES,
          payload: result.data,
        });
      } catch (error) {
        console.log("error " + error.message);
      }
    };
  }
  
  export function detailId(id) {
    return async function (dispatch) {
      try {
        const response = await axios.get(`recipes/${id}`);
        dispatch({
          type: DETAIL_ID,
          payload: response.data,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
  }
  
  export function orderRecipes(value) {
    return {
      type: ORDER_RECIPES,
      payload: value,
    };
  }
  
  export function filterRecipes(value) {
    return {
      type: FILTER_RECIPES,
      payload: value,
    };
  }
  
  export function searchRecipeName(name) {
    return async function (dispatch) {
      try {
        console.log(name);
        const response = await axios.get(`recipes?name=${name}`);
        dispatch({
          type: SEARCH_RECIPE_NAME,
          payload: response.data,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
  }
  
  export function createRecipe(recipe) {
    return async function (dispatch) {
      try {
        let newRecipe = await axios.post(`recipes`, recipe);
        dispatch({
          type: CREATE_RECIPE,
          payload: newRecipe.data,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
  }
  
  export function diets(){
    return async function(dispatch){
      try {
        const result=await axios('diets');
        dispatch({
          type:DIETS,
          payload:result.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
  
  export function recipesDB(){
    return async function(dispatch){
      try {
        const result=await axios('recipesDB');
        dispatch({
          type:RECIPES_DB,
          payload:result.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  };
  
  export function recipesLocales(){
    return async function(dispatch){
      try {
        const result=await axios('recipesApi');
        dispatch({
          type:LOCALES_RECIPES,
          payload:result.data
        })
      } catch (error) {
        console.log(error)
      }
    }
  };