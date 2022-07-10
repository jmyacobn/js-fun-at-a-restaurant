function createRestaurant(name) {
  var menus = {
    breakfast: [],
    lunch: [],
    dinner: []
  }
  var restaurant = {
    name: name,
    menus: menus
  }
return restaurant
}


function addMenuItem(restaurants, newItem) {
  if(newItem.type === "lunch" && !restaurants.menus.lunch.includes(newItem)) {
  restaurants.menus.lunch.push(newItem)
  } else if (newItem.type === "breakfast" && !restaurants.menus.breakfast.includes(newItem)) {
  restaurants.menus.breakfast.push(newItem)
  } else if (newItem.type === "dinner" && !restaurants.menus.dinner.includes(newItem)) {
  restaurants.menus.dinner.push(newItem)
  }
}

function removeMenuItem(pizzaRestaurant, name, type) {
  for(var i = 0; i < pizzaRestaurant.menus[type].length; i++) {
    pizzaRestaurant.menus[type].splice(i,1)
    return `No one is eating our ${name} - it has been removed from the ${type} menu!`
  }
    if (!pizzaRestaurant.menus[type].includes(name)) {
    return `Sorry, we don't sell ${name}, try adding a new recipe!`
  }
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
