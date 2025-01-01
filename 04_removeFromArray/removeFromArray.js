const removeFromArray = function(array,...args) {
    let newArray = [];
    return array.filter(val => !args.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
