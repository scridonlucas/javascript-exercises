const fibonacci = function(number) {
    if(number < 0) return "OOPS";
    let a = [];
    a[0] = 1;
    a[1] = 1;
    for(let i = 2; i < number; i++) {
        a[i] = a[i-1] + a[i-2];
    }
    return a[number-1];
};

// Do not edit below this line
module.exports = fibonacci;
