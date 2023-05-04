const coffeeMenu = require("./coffee_data.js")

//prompt 2
const coffee = coffeeMenu.map( entry => entry.name)
console.log(coffee)

//prompt 3
const drink = coffeeMenu.filter(drink => drink.price == 5 );
console.log(...drink)


//prompt 4
const even = coffeeMenu.filter(drink => drink.price %2 === 0 );
console.log(...even)

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

//prompt 6 & 7 
const seasonal = coffeeMenu.filter(drink => drink.seasonal == true );
console.log(...seasonal)
console.log (`affogato is with imported beans` )
console.log (`cuban espresso is with imported beans` )
