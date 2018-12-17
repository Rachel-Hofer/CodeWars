// Instructions:
// Pete likes to bake some cakes. 
// He has some recipes and ingredients. 
// Unfortunately he is not good in maths. 
// Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) 
// and the available ingredients (also an object) and returns 
// the maximum number of cakes Pete can bake (integer). 
// For simplicity there are no units for the amounts 
// (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). 
// Ingredients that are not present in the objects, can be considered as 0.


// My Answer:

function cakes(recipe, available) {
    let arr = [];

    for(let i in recipe) { //run a loop through recipe object

        if(available.hasOwnProperty(i)){ // if available 
            arr.push(~~(available[i] / recipe[i]));
        } else {
            return 0;
        }
    }
    return Math.min(...arr);
}


// Best Practice:

// function cakes(recipe, available) {
//     return Object.keys(recipe).reduce(function(val, ingredient) {
//       return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
//     }, Infinity)  
// }