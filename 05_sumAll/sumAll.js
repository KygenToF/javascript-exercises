const sumAll = function(min,max) {
    if (Number.isInteger(min) && Number.isInteger(max)) {
        if(min > 0 && max > 0) {
            let sum = 0;
            if (min > max) [max, min] = [min, max];
            for (i = min; i <= max; i++) {
                sum += i;
            }
            return sum;
        }
    }
    return "ERROR";
}

// Do not edit below this line
module.exports = sumAll;
