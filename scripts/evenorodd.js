function oddOrEven(number) {
    if (!Number.isInteger(number)) {
        return console.error("Not an integer!")
    }
    if (number % 2 === 0) {
        console.log("The number is even");
    } else {
        console.log("The number is odd");
    }
}
 
oddOrEven(2)  
oddOrEven(3) 
oddOrEven(0.2) 