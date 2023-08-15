const allRecipes=require('.././recipe');
const {Recipe}=require('../../db');
const { Op } = require('sequelize');

const recipeGetName=async(name)=>{

        //buscar en base de datos
/*         const recipeDB=await Recipe.findAll({
                where:{name:{[Op.iLike]:name}}
        }) */
        const recipeDB=await Recipe.findAll();
        const recipeDBResult=recipeDB.filter(cur=>cur.name.toLowerCase().includes(name.toLowerCase()))

        //buscar en api
        const allRecipe=await allRecipes();
        const filterName=allRecipe.filter(cur=>cur.name.toLowerCase().includes(name.toLowerCase()))
        //const filterName=allRecipe.filter(cur=>cur.name.toLowerCase()===name.toLowerCase());
        

        if(filterName.length>0 || recipeDBResult.length>0){
                let result=await( recipeDBResult.concat(filterName));
                return result;
        } 

        throw new Error("There are no recipes with that name");
}

module.exports=recipeGetName