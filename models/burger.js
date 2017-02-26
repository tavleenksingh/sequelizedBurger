//creating burgers table with sequelize
module.exports = function(sequelize, DataTypes){
  var Burger = sequelize.define("Burger", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    burger_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1]
        }
      },
    devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
    date: {
        type: DataTypes.DATE
      }
    }, {
    timestamps: false
    });
    return Burger;
}