const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;

const recipe = async () => {
  const apiFodd = await axios(
    `https://api.spoonacular.com/recipes/complexSearch?number=100&addRecipeInformation=true&apiKey=${API_KEY}`
  );
  const allRecipesResults = apiFodd.data.results.map(cur=>{
    let analyzedInstructions=cur.analyzedInstructions
    return {
    id:cur.id,
    name:cur.title,
    image:cur.image,
    dishTypes:cur.dishTypes,
    diets:cur.diets,
    healthScore:cur.healthScore,
    summary:cur.summary.replace(/(<([^>]+)>)/gi, ""),
    steps:analyzedInstructions[0]?.steps
  }})
  return allRecipesResults;
};
module.exports = recipe;