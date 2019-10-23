    
fizzBuzz = function(number) {
	if (number % 3 === 0 && number % 5 === 0) {
		return "FizzBuzz";
	}
	else if (number % 3 === 0) {
		return "Fizz";
	}
	else if (number % 5 === 0) {
		return "Buzz";
	}	
	else {
		return number
	}
};

/* The modulo operator (%) will be able to determine if the number is divisible by 3 and 5. For example, if (number % 3 === 0 && number % 5 === 0) {return "FizzBuzz";} */