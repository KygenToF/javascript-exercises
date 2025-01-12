const findTheOldest = function(array) {
    const yearsAlive = array.map(object => {
        object.yearOfDeath ??= new Date().getFullYear();
        return object.yearsAlive = object.yearOfDeath - object.yearOfBirth;
    });
    return array[yearsAlive.indexOf(Math.max(...yearsAlive))];
};

// Do not edit below this line
module.exports = findTheOldest;
