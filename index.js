const coffeeMenu = require("./coffee_data.js")

//prompt 2
const coffee = coffeeMenu.map( entry => entry.name)
console.log(coffee)

//prompt 3
const drink = coffeeMenu.filter(drink => drink.price == 5 ).map( drink => drink.name);
console.log(drink)


//prompt 4
const even = coffeeMenu.filter(drink => drink.price %2 === 0 ).map( drink => drink.name);
console.log(even)

//prompt 5
function sumdrink(array) {
    let sum = 0;
    
    array.forEach(array => {
        sum += array.price;
    });
    
    console.log(sum);
    return sum
}
sumdrink(coffeeMenu)

//prompt 6 
const seasonal = coffeeMenu.filter(drink => drink.seasonal == true ).map( drink => drink.name);
console.log(seasonal)

//prompt 7
const seasonalbeans = seasonal.map(drink => `${drink} with imported beans`)
console.log(seasonalbeans)
