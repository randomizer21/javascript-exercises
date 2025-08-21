const leapYears = function(year) {
    const divisibleByFour = year % 4 === 0;
    const divisibleByHundred = year % 100 === 0;
    const divisibleByFourHundred = year % 400 === 0;

    if (divisibleByFour && !divisibleByHundred || divisibleByFourHundred) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
