Calculator = function() {
    this.value = 0;
};

Calculator.prototype.add = function(number) {  /* just one number as argument */
    if (typeof(number) == "number") {
        this.value += number;  /* incremented value to running total */
    } else {
        alert("Error!");
    }
};


/*function addition(numOne, numTwo) {
    if(typeof(numOne) == "number" && typeof(numTwo) == "number") {
    return numOne + numTwo;
    } else {
        alert("Error!");
        // return "Error!" ;
    }
} */