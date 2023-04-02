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