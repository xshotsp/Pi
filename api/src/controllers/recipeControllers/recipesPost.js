const { Recipe,Diets } = require("../../db");

const recipesPost = async ( {name, image, diets, healthScore, summary,steps} ) => {
  const postRecipe = await Recipe.create({
    name,
    image,
    diets,
    healthScore,
    summary,
    steps
  });

//aca hace la relacion
 diets.forEach(async(diet) => {
  const recipeDiet=await Diets.findOne({where:{name:diet}});
  await postRecipe.addDiets(recipeDiet);
 });
  

  return postRecipe;
};

/* {
  "name": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
  "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
  "diets": [
    "gluten free",
    "dairy free",
    "lacto ovo vegetarian",
    "vegan"
  ],
  "healthScore": 75,
  "summary": "You can never have too many Chinese recipes, so give Cauliflower, Brown Rice, and Vegetable Fried Rice a try. This recipe serves 8 and costs $1.12 per serving. This hor d'oeuvre has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. Head to the store and pick up broccoli, sesame seeds, soy sauce, and a few other things to make it today. 3689 people were impressed by this recipe. It is brought to you by fullbellysisters.blogspot.com. It is a good option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes roughly <b>30 minutes</b>. Overall, this recipe earns a <b>spectacular spoonacular score of 100%</b>. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1584601\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1238897\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, and <a href=\"https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1230097\">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>.",
  "steps": [
    {
      "name": "",
      "steps": [
        {
          "number": 1,
          "step": "Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of \"cauliflower rice.\""
        }]}]
} */

module.exports = recipesPost;