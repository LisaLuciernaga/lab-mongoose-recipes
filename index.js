const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    // Run your code here, after you have ensured that the connection was made
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

//Iteration 2
  Recipe.create({
    title: "Pizza",
    level: "Easy Peasy",
    ingredients: ["flour", "water", "tomatoes", "cheese", "olive oil"],
    cuisine: "Italian",
    dishType: "main_course",
  }).then(result => {
    console.log("result: ", result);
})
.catch(err => {
    console.log(err);
    res.send("An error happened")});

//Iteration 3
Recipe.insertMany(data)
.then(result => {
  result.forEach(function(recipe){
    console.log("title: " + recipe.title);
  })
})
.catch(err => {
  console.log(err);
});

//Iteration 4
Recipe.findOneAndUpdate({title: "Rigatoni alla Genovese"}, {duration: 100})
.then(resp => {
  console.log("Rigatoni alla Genovese successfully updated!")
})
.catch(err => {
  console.log(err)
})

//Iteration 5
Recipe.deleteOne({title: "Carrot Cake"})
.then(res=>{
  console.log("Carrot cake deleted")
})
.catch(err => {
  console.log(err)
})

//Iteration 6
connection.end();