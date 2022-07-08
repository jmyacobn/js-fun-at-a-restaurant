function nameMenuItem(name) {
  var menuItemName = name
  return `Delicious ${menuItemName}`
}

function createMenuItem(name, price, type) {
  var item = {
    name: name,
    price: price,
    type: type,
  }
  return item
}

function addIngredients (toppings, array) {
  if(array.includes(toppings)) {
  array
} else {
  array.push(toppings)
}
  return array
}

function formatPrice(cost) {
  return `$${cost}`
}

function decreasePrice(cost) {
  newCost = cost*0.9
  return newCost
}

function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type
  }

  return recipe

}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
