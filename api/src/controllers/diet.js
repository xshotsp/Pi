const recipe = require ('./recipe');

const diet = async () => {
    const apiFood = await recipe();
    const diets = apiFood.map(cur=>cur.diets);
    const uniqueDiet = diets.reduce((acc,cur)=>acc.concat(cur));
    const resultDiet =[...new Set(uniqueDiet)];
    return resultDiet
};

module.exports = diet