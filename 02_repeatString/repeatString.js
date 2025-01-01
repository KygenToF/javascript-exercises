const repeatString = function(string, occurence) {
    if (occurence < 0) return "ERROR";
    let repeatedString = "";
    for (i = 0; i < occurence; i++) {
        repeatedString += string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
