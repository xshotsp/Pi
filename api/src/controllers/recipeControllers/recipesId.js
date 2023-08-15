const recipe = require(".././recipe");
const {Recipe}=require('../../db')

const recipesId = async(id) => {
  const allRecipe =await recipe();
  const filterIdRecipes = await allRecipe.find((cur) => cur.id === Number(id));
  if(filterIdRecipes){
    return filterIdRecipes;
  };
  const dbRecipe= await Recipe.findByPk(id) 
  if(dbRecipe)return dbRecipe;
  throw new Error("No recipes with that id")
};
module.exports = recipesId;