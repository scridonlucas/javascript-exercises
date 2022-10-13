const reverseString = function(text) {
    const myArray = text.split("");
    let newText = "";
    for(let i = myArray.length - 1; i >=0; i--) {
        newText += myArray[i];
    }
    return newText;
};

console.log(reverseString("abc"));

// Do not edit below this line
module.exports = reverseString;
