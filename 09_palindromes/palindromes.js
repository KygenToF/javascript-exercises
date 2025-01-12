const palindromes = function (string) {
    const newString = string.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const reversedString = [...newString].reverse().join('');
    return newString === reversedString
};

// Do not edit below this line
module.exports = palindromes;
