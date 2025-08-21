const sumAll = function(min, max) { // [4, 1]

    if (min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max)) {
        return "ERROR";
    }

    let sum = 0;

    if (min > max) {
        const temp = min; // 4
        min = max; // [1, 1]
        max = temp; [1, 4]
    }

    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
