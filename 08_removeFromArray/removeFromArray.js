const removeFromArray = function(arr, ...args) {
    return arr.filter(val => !args.includes(val)); /* filter the array to only include
    numbers where the inputed values are removed*/
};

// Do not edit below this line
module.exports = removeFromArray;
