const palindromes = function (string) {
    let newString = string.toLowerCase().replace(/[^a-z]/g, "");
    let arrayString= newString.split("");
    arrayString.reverse();
    let inversedString = arrayString.join("");
    return newString === inversedString;
};

console.log(palindromes("dad"));
// Do not edit below this line
module.exports = palindromes;
