// Exercise 1. Create a function that can create a triangle pattern according to the height we provide like the following :
/*
01
02 03
04 05 06
07 08 09 10
// Parameters : height -> triangle height
*/
// INPUT
let triHeight = 4;
let resHeight = "";
let counter = 1;
let counter2 = 1;
// PROCESS
function triangle(triHeight){
    for(let i = 0; i <= triHeight; i++){ // BARIS
        for(let i = 0; i < counter; i++){ // KOLOM
            if(counter2 <= 9){
                resHeight += `0${counter2} `;
                counter2++;
            }
            else{
                resHeight += `${counter2} `;
                counter2++;
            };
        };
        resHeight += `\n`;
        counter++;
    };
    return resHeight;
}
// OUTPUT
console.log(triangle(triHeight));




// Exercise 2. Create a function that can loop the number of times according to the input we provide, and will replace 
// multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
// Parameters : n -> total looping
// INPUT
let loop = 15;
let resultLoop = "";
// PROCESS
function FizzBuzz(loop){
    for(let i = 0; i <= 15; i++){
        if(i === 0 || i === 1 || i === 2){
            resultLoop += `loop no.${i} - \n`
        }
        else if(i % 3 === 0 && i % 5 === 0){
            resultLoop += `loop no.${i} FizzBuzz \n`
        }
        else if(i % 3 === 0){
            resultLoop += `loop no.${i} Fizz \n`
        }
        else if(i % 5 === 0){
            resultLoop += `loop no.${i} Buzz \n`
        }
        else{
            resultLoop += `loop no.${i} - \n`
        }
    }
    return resultLoop;
}
// OUTPUT
console.log(FizzBuzz());




// Exercise 3. Create a function to calculate Body Mass Index (BMI). Formula : BMI = weight (kg) / (height (meter))²
// Parameters : weight & height
// Return values :
// < 18.5 return “less weight”
// 18.5 - 24.9 return “ideal”
// 25.0 - 29.9 return “overweight”
// 30.0 - 39.9 return “very overweight”
// > 39.9 return “obesity”
// INPUT
function BMI(weightKg, heightMeter){
    let result = weightKg / (heightMeter * heightMeter);
    let result2 = "";
// PROCESS
    if(result < 18.5){
        result2 += `BMI = ${result}; Less Weight`;
    }
    else if(result < 24.9){
        result2 += `BMI = ${result}; Ideal`;
    }
    else if(result < 29.9){
        result2 += `BMI = ${result}; Overweight`;
    }
    else if(result < 39.9){
        result2 += `BMI = ${result}; Very Overweight`;
    }
    else if(result > 39.9){
        result2 += `BMI = ${result}; Obesity`;
    }
    
    console.log(result);
    return result2;
}
// OUTPUT
console.log(BMI(70, 1.6));




// Exercise 4. Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// INPUT
let even = [1, 1, 2, 94, 3, 4, 84, 5, 7, 100, 9, 10, 1, 4];
let resEven = [];
let resString = "";
// PROCESS
// CARA check array per index = jika genap = copas ke string baru. string baru copas ke array baru
function functionEven(even){
    for(let i = 0; i < even.length; i++){
        if(even[i] % 2 === 0){
            resString += even[i];
            resString += " "; // "space" diperlukan sebagai pemisah antar angka, dan juga untuk pemisah untuk fungsi .split()
        }
    }
    console.log(resString);
    resEven = resString.split(" ")
    resEven.pop() // Jika tidak menggunakan .pop() maka akan ada array kosong di index terakhir
    return resEven;
}
// OUPUT
// Tapi hasil tersebut merubah angka menjadi string, tapi yang penting bekerja dulu :)
console.log(functionEven(even));
console.log(resEven);




// Exercise 5. Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]
// INPUT
let word = "Hello World"
let resWord = [];
// PROCESS
function wordSplit(word){
    resWord = word.split(" ");
    return resWord;
}
// OUTPUT
console.log(wordSplit(word));
console.log(resWord);
console.log(resWord[0]);
console.log(resWord[1]);
