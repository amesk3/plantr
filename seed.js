
const db = require('./models')
// const Sequelize = require('sequelize')



db.sync({force: true})
  .then(() => {
   
    return db.models.Vegetable.bulkCreate([
        { name: 'corn', color: 'yellow' },
        { name: 'carrot', color: 'orange'}
    ])
    .then(() =>{
    return db.models.Plot.bulkCreate([
        { size: 10, shaded: true },
        { size: 20, shaded: false}
      ])

    .then(() =>{
        return db.models.Gardener.bulkCreate([
            { name: Joe, age: 30 },
            { name: Matt, age: 40}
        ])

  })

  .catch(err => {
    console.log('Disaster! Something went wrong! ')
    console.log(err)
    // db.close() // only if using a version of node without `finally`
  })
  .finally(() => { // only if using a version of node WITH `finally`
    db.close()
    
})