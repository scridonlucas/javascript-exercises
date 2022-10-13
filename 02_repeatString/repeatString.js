const repeatString = function(text, number) {
    let returnedText = "";
    if(number < 0 ) {
        return "ERROR";
    }
    for(let i = 0; i < number; i++) {
        returnedText += text;
    }
    return returnedText;
};

// Do not edit below this line
module.exports = repeatString;
