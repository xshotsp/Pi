const { Router } = require("express");
require("dotenv").config();
const { API_KEY } = process.env;

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const allRecipes = require("../controllers/recipe");
const recipeId = require("../controllers/recipeControllers/recipesId");
const recipeGetName = require("../controllers/recipeControllers/recipesGetName");
const diets = require('../controllers/diet');

const { Recipe } = require("../db");
const {Diets} = require('../db')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//prueba
router.get("/", (req, res) => {
  try {
    console.log(API_KEY);
    res.status(200).send("todo ok");
  } catch (error) {}
});
//all api
router.get("/recipesApi", async (req, res) => {
  try {
    const results = await allRecipes();
    res.status(200).json(results);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});
//all databases
router.get("/recipesDB", async (req, res) => {
  try {
    const allReci = await Recipe.findAll();
    res.status(200).json(await allReci);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.get("/dietsDB",async(req,res)=>{
  try {
    let dietsType=await Diets.findAll();
    console.log(dietsType.length)
    res.status(200).json(dietsType.length)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

//buscar receta por id 716426
router.get("/recipes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await recipeId(id);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

//http://localhost:3001/recipes?name=Cannellini Bean and Asparagus Salad with Mushrooms
router.get("/recipes", async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) {
      const allReci = await Recipe.findAll();
      const allReciApi=await allRecipes()
      let allResult=allReci.concat(allReciApi);
      return res.status(200).json(allResult);
    }
    const recipe = await recipeGetName(name);
    res.status(200).send(recipe);
  } catch (error) {
    res.status(404).json(error.message);
  }
});

//agregar receta por body
router.post("/recipes", async (req, res) => {
  try {
    const { name, image, diets, healthScore, summary,steps } = req.body;
    if (!name || !image || !diets || !healthScore || !summary) {
      return res.status(400).send("missing data to complete");
    }
    const newRecipe = await recipesPost({
      name,
      image,
      diets,
      healthScore,
      summary,
      steps
    });
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.get("/diets", async (req, res) => {
  try {
    let dietsType=await Diets.findAll();
    if(dietsType.length>0){
     return res.status(200).json(dietsType)
    };
    let result=await diets();
    res.status(200).json(result)
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;