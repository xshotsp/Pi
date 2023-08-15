const dietController = require("./diet");
const {Diets} = require("../../db");

const diets = async () => {
  const typeDiets =await dietController();
  
  const result = await Diets.bulkCreate(typeDiets.map(name => ({ name })))
  return result;
};
module.exports = diets;