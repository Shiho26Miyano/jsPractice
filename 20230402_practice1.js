//20230402_test

//forEach()
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});

//filter()
const nums = [0,10,20,30,40,50];
const newNums = nums.filter( function(num) {
    return num > 20;

})

console.log(newNums);
//map()
const result = nums.map( function(num) {
    return num / 10;
})

console.log(result);

// spread operator

let top2 = [
    "test1",
    "test2",
    "test3"
]

function showItinerary(place1, place2, place3){
    console.log(place1);
    console.log(place2);
    console.log(place3);
}

showItinerary(...top2);

//Rest operator
// 1 create an array
const top7 = [
    "test1",
    "test2",
    "test3",
    "test4",
    "test5",
    "test6",
    "test7"
]
// 2 destructuring
// get the first 3
const [] = top7;
const [first, second, third, ...secondVisit] = top7;
console.log(top7);
console.log(first, second, third);

function addTaxToPrices(taxRate, ...itemsBought){
    return itemsBought.map(item => taxRate * item);
}

let shoppingCart = addTaxToPrices(1.1,10,20,30,40,51,60);
console.log(shoppingCart);


