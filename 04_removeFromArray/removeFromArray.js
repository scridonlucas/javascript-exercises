const removeFromArray = function(myArray, removeElement) {
    for(let i = 0; i < myArray.length; i++) {
        if(myArray[i] === removeElement) {
            myArray.splice(i, 1);
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
