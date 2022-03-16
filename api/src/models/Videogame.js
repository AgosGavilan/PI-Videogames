const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: { //preguntar por este id, porque sequelize te genera uno automaticamente
      type: DataTypes.UUID, //genera un numero random con letras y numeros
      defaultValue: DataTypes.UUIDV4, //me genera automaticamente un UUISV4
      unique: true,
      primaryKey: true,
      allowNull: false //allowNull(permite un vacio) --> FALSO
   }, 
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    released: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
};
