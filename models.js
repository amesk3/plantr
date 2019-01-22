const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/plantr')


const Gardener = db.define('Gardener', {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER,
  })
const Plot = db.define('Plot', {
    size: Sequelize.INTEGER,
    shaded: Sequelize.BOOLEAN,
  })
const Vegetable = db.define('Vegetable', {
    name: Sequelize.STRING,
    color: Sequelize.STRING,
    planted_on: Sequelize.DATE,
  })



Plot.belongsTo(Gardener)
Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'})
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'})

Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'})

module.exports = db