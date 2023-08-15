import { filterRecipes } from "../actions/actions";
import {
  ALL_RECIPES,
  DETAIL_ID,
  ORDER_RECIPES,
  FILTER_RECIPES,
  SEARCH_RECIPE_NAME,
  CREATE_RECIPE,
  DIETS,
  LOCALES_RECIPES,
  RECIPES_DB
} from "../actions/actionTypes";

const initialState = {
  recipesAll: [],
  recipeDetail: null,
  copyRecipesAll: [],
  filterRecipes: null,
  diets: [],
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ALL_RECIPES:
      return {
        ...state,
        recipesAll: payload,
        copyRecipesAll: payload,
        filterRecipes: payload,

      };
    case DETAIL_ID:
      return {
        ...state,
        recipeDetail: [payload],
      };
    case ORDER_RECIPES:
      let orderCopy = [...state.recipesAll];
      let orderNot = [...state.filterRecipes];
      console.log("orderNot", orderNot);
      let order = (payload) => {
        if (payload === "Default") return orderNot;
        return orderCopy.sort((a, b) => {
          if (payload === "Asendente") return a.id - b.id;
          if (payload === "Desendente") return b.id - a.id;
          if (payload === "A-Z") return a.name.localeCompare(b.name);
          if (payload === "Z-A") return b.name.localeCompare(a.name);
          if (payload === "Max health score")
            return b.healthScore - a.healthScore;
          if (payload === "Min health score")
            return a.healthScore - b.healthScore;
        });
      };
      return {
        ...state,
        recipesAll: order(payload),
      };
    case FILTER_RECIPES:
      const filterCopy = [...state.copyRecipesAll];
      const filter = (payload) => {
        let diets = filterCopy.filter((cur) => cur.diets.includes(payload));
        return diets;
      };
      return {
        ...state,
        recipesAll: filter(payload),
        filterRecipes: filter(payload),
      };

      case LOCALES_RECIPES:
        return{
          ...state,
          recipesAll:payload,
          filterRecipes:payload

        }
      
      case RECIPES_DB:
        console.log(payload)
        return{
          ...state,
          recipesAll:payload,
          filterRecipes:payload
        }


    case SEARCH_RECIPE_NAME:
      const result = (payload) => {
        if (!Array.isArray(payload)) return "Not result";
        if (payload.length > 0) return payload;
        else console.log("not result");
      };

      return {
        ...state,
        recipesAll: result(payload),
      };

    case CREATE_RECIPE:
      return {
        ...state,
        recipesAll: [...state.recipesAll, payload],
        filterRecipes: [...state.filterRecipes, payload],
        copyRecipesAll: [...state.copyRecipesAll, payload],


      };

    case DIETS:
      const filterDiets = payload.map((cur) => cur.name);
      return {
        ...state,
        diets: filterDiets,
      };
    default:
      return state;
  }
}

export default rootReducer;