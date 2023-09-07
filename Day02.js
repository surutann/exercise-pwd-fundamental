// Exercise 1. Write a code to convert celsius to fahrenheit
// Input 
let celsius = 109;
let fahrenheit;
// Process
fahrenheit = ((9 * celsius) / 5) + 32
// Output
console.log(fahrenheit);




// Exercise 2. Write a code to check whether the number is odd or even
// Input 
let number = 100;
// Process dan Output
if(number % 2 == 0){
    console.log("number is even");
}
else{
    console.log("number is odd");
};




// Exercise 3. Write a code to check whether the number is prime number or not
let prime = 11;
let isPrime;
let counter = 0;
for(let divisor = 11; divisor >= 0; divisor--){
    isPrime = prime % divisor;
    if(isPrime === 0){
        console.log("divisible by", divisor);
        counter++;
    }
};

if((counter === 1) || (counter === 2)){
    console.log(prime, "is prime");
}
else{
    console.log(prime, "is not prime");
}




// Exercise 4. Write a code to find the sum of the numbers 1 to N
// Input
let sum = 10;
let result = 0;
// Process
for (let x = 0; x <= sum; x++){
    result += x;
    console.log(result);
}
// Output
console.log("Sum of 1 to", sum, "=", result);




// Exercise 5. Write a code to find factorial of a number
// Input
let factorial = 5;
let resultFactorial = 1;
// Process
for (let x = 1; x <= factorial; x++){
    resultFactorial = resultFactorial * x;
    console.log(resultFactorial);
}
// Output
console.log("Factorial of", factorial, "=", resultFactorial);




// Exercise 6. Write a code to print the first N fibonacci numbers
// 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
// Input
let fibo = 9;
let angka1 = 0;
let angka2 = 1;
let resultFibo;
let finalFibo = "";
// Process
for(let x = 0; x <= fibo; x++){
    resultFibo = angka1 + angka2;
    angka1 = angka2;
    angka2 = resultFibo;
    
    console.log(resultFibo);
    finalFibo += `${resultFibo} `;
}
// Output
console.log(finalFibo);
