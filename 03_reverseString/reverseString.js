/* const reverseString = function(string) {
    let sentence = string.split(' ');
    sentence = sentence.map(element => element.split(''));
    let newSentence = [];
    for (i = sentence.length - 1; i >= 0; i--) {
        const word = sentence[i];
        let newWord = [];
        for (j = word.length - 1; j >= 0; j--) {
            newWord.push(word[j]);
        }
        newSentence.push(newWord.join(""));
    }
    return newSentence.join(" ")
} */

const reverseString = string => {
    return string.split("").reverse().join("")
}

// Do not edit below this line
module.exports = reverseString;
