const removeFromArray = function(myArray, ...theArgs) {
    for(let i = 0; i < myArray.length; i++) {
        if(theArgs.includes(myArray[i])) {
            myArray.splice(i, 1);
            i--;
        }
    }
    return myArray;
};

// Do not edit below this line
console.log(removeFromArray([1, 2, 3, 4], 3, 2));
module.exports = removeFromArray;
