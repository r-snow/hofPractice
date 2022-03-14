// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var counter = 0;
  _.each(numbers, function(number, index) {
    if (number % 5 === 0) {
      counter++;
    }
  });
  return counter;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var fruit = _.filter(fruits, function(fruit) {
    return fruit === targetFruit;
  });
  return fruit;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  var fruitStartWith = _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });
  return fruitStartWith;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var cookies = _.filter(desserts, function(dessert) {
    return dessert === 'cookie';
  });
  return cookies;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var sum = _.reduce(products, function(total, item) {
    return total + Number(item.price.slice(1));
  }, 0);
  return sum;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }

// I - array of obj
// O - obj
// C -
// E -

// create an var for obj of desert types and count
// iterate through array
  //iterate through result obj
    // if dessertType does not exist in result obj
      // add dessertType to result obj
      // add one to dessertType value
    // if dessertType already exists within result obj
      // add one to dessertType value
// return result obj

var dessertCategories = function(desserts) {
  var dessertTypeCount = {};

  var dessertTypes = _.reduce(desserts, function(dessertTypes, dessert) {
    return dessertTypes.concat(dessert.type);
  }, []);

  _.each(dessertTypes, function(type) {
    if (dessertTypeCount[type] !== undefined) {
      dessertTypeCount[type] += 1;
    } else {
      dessertTypeCount[type] = 1;
    }
  });

  return dessertTypeCount;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!

// I - array of objs
// O - array
// C - use an array as accumulator not an external array
// E -

// releaseYear

// iterate through the array
  // add movies with releaseYear between 1990 and 2000 to accumulator array
// return accumulator array

var ninetiesKid = function(movies) {
  var nintiesMovies = _.reduce(movies, function(nintiesMovies, movie) {
    if (movie.releaseYear >= 1990 && movie.releaseYear <= 2000) {
      return nintiesMovies.concat(movie.title);
    } else {
      return nintiesMovies;
    }
  }, []);

  return nintiesMovies;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.

// I - array of obj
// O - boolean
// C -
// E -

// iterate over array
  // test if runtime of movie is less than time limi
  // return boolean result

// movies.movie.runtime


var movieNight = function(movies, timeLimit) {
  var shortMovies = _.reduce(movies, function(shortMovies, movie) {
    if (movie.runtime <= timeLimit) {
      return shortMovies = true;
    } else {
      return shortMovies;
    }
  }, false);

  return shortMovies;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.

// I - array of strings
// O - array of all strings converted to uppercase letters
// C -
// E -

var upperCaseFruits = function(fruits) {
  var capFruits = _.map(fruits, function (string) {
    return string.toUpperCase();
  });
  return capFruits;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.

// I - array of objects
// O - array of objects with new property 'glutenFree' with boolean value
// C -
// E -
//  ** items that contain flour are not gluten-free
//  ** flour is/isn't in desserts.ingredients

// create var dessertsGF
  // iterate through array of dessert objects
    // test to see if flour is in their ingredient list
      // if so assign property glutenFree to false
      // if not assign property glutenFree to true
// return dessertsGF

var glutenFree = function(desserts) {
  var dessertsGF = _.map(desserts, function(dessert) {
    if (_.contains(dessert.ingredients, 'flour')) {
      dessert.glutenFree = false;
      return dessert;
    } else {
      dessert.glutenFree = true
      return dessert;
    }
  });
  return dessertsGF;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/

// I - array of objects
// O - array of objects with salePrice added
// C - round decimals to 2 places
// E -

// declare var of groceriesWCoupon
  // iterate over array of objects with map
    // get price and convert it to a num
      // discount price add it to the object

var applyCoupon = function(groceries, coupon) {
  var groceriesWCoupon = _.map(groceries, function(item) {
    var price = Number.parseFloat(item.price.substring(1));
    var salePrice = price * (1 - coupon);
    item.salePrice = '$' + salePrice.toFixed(2);
    return item;
  });
  return groceriesWCoupon;
};
