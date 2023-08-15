const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    diets: {
      type: DataTypes.ARRAY(DataTypes.STRING(5000)),
      allowNull: false,
    },
    healthScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        min:0,
        max:100
      }
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    steps:{
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: false,
      defaultValue: [],
    }
  },
    {
      timestamps: false
  });
};