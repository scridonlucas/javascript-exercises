const sumAll = function(number1, number2) {
    let finalSum = 0;
    if(number1 < 0 || number2 < 0) return "ERROR";
    if(typeof number1 != 'number' || typeof number2 != 'number') return "ERROR";
    if(number1 > number2) {
        let aux = number1;
        number1 = number2;
        number2 = aux;
    }
    for(let i = number1; i <= number2; i++) {
        finalSum += i;
    }
    return finalSum;

};

// Do not edit below this line
module.exports = sumAll;
