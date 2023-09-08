// Exercise 1. Write a code to display the multiplication table of a given integer.
// Input
let number = 9;
let resultNumber = "";
//Process
for(let i = 1; i <= 10; i++){
    let result = number * i;
    resultNumber += `${number} x ${i} = ${result} \n`;
};
//Output
console.log(resultNumber);




// Exercise 2. Write a code to check whether a string is a palindrome or not.
// Output =  palindrome atau bukan
// Input
let dataP = "Malam";
let dataReverse = "";
let resultP = "";
// Process
for(let i = dataP.length - 1; i >= 0; i--){
    dataReverse += dataP.charAt(i);
};
console.log(dataReverse);

if(dataP.toLowerCase() === dataReverse.toLowerCase()){
    resultP = "palindrome";
}
else{
    resultP = "bukan palindrome";
};
// Output
console.log(resultP);




// Exercise 3. Write a code to convert centimeter to kilometer.
// Input
let centi = 100000;
//Process
let km = centi / 100000;
//Output
console.log(`${centi} cm = ${km} km`);




// Exercise 4. Write a code to format number as currency (IDR)
// Input
let money = 1000;
// Process
moneyCurrency = money.toLocaleString("id", {style: "currency", currency: "IDR"})
// Output
console.log(moneyCurrency);




// Exercise 5. Write a code to remove the first occurrence of a given “search string” from a string
// Example : string = “Hello world”, search string = “ell” -> “Ho world”
// Input
let rmString = "Hello World";
// Process
let resultRm = rmString.replace("ell", "");
// Output
console.log(resultRm);




// Exercise 6. Write a code to capitalize the first letter of each word in a string
// Example : “hello world” -> “Hello World”
// Input
let cap = "hello world asd ewrfhsfds dfswer34 546dsfffaw";
let resCap = "";
// Process
for(let i = 0; i <= cap.length - 1; i++){
    if(i == 0){
        resCap += cap.charAt(i).toUpperCase();
    }

    else if(cap.charAt(i-1) == " "){
        resCap += cap.charAt(i).toUpperCase();
    }
    else{
        resCap += cap.charAt(i);
    };
}
// Output
console.log(resCap);




// Exercise 7. Write a code to reverse a string.
// Input
let word = "Hello World";
let wordRev = "";
// Process
for(let i = word.length - 1; i >= 0; i--){
    wordRev += word.charAt(i);
};
//Output
console.log(wordRev);




// Exercise 8. Write a code to swap the case of each character from string
// Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
// the quick brown fox jumps over the lazy dog
let originFox = "The QuiCk BrOwN Fox juMPs ovER THE LAZY DOG";
let resultFox = "";
// Process
for(let i = 0; i <= originFox.length; i++){
    if(originFox.charAt(i) === originFox.charAt(i).toUpperCase()){
        resultFox += originFox.charAt(i).toLowerCase();
    }
    else{
        resultFox += originFox.charAt(i).toUpperCase();
    }
};
// Output and Comparison with Original String Text
console.log(originFox);
console.log(resultFox);




// Exercise 9. Write a code to find the largest of two given integers
// Input
let intA = 10;
let intB = 17;
let resultInt = "";
// Process
if (intA > intB){
    resultInt = `the largest value is int A = ${intA}`
}
else if(intA < intB ){
    resultInt = `the largest value is int B = ${intB}`
}
else if(intA === intB){
    resultInt = `int A and int B same the same value`
}
// Output
console.log(resultInt);




// Exercise 10. Write a conditional statement to sort three numbers
// Input
let sortA = 9;
let sortB = 15;
let sortC = 1;
let resultSort = "";
// Process
if((sortA <= sortB) && (sortA <= sortC)){
    resultSort += `${sortA} `
    if(sortB <= sortC){
        resultSort += `${sortB} `
        resultSort += `${sortC} `
    }
    else{
        resultSort += `${sortC} `
        resultSort += `${sortB} `
    }
}
else if(sortB <= sortC){
    resultSort += `${sortB} `
    if(sortA <= sortC){
        resultSort += `${sortA} `
        resultSort += `${sortC} `
    }
    else{
        resultSort += `${sortC} `
        resultSort += `${sortA} `
    }
}
else if(sortC <= sortA){
    resultSort += `${sortC} `
    if(sortA <= sortB){
        resultSort += `${sortA} `
        resultSort += `${sortB} `
    }
    else{
        resultSort += `${sortB} `
        resultSort += `${sortA} `
    }
}
// Output
console.log(resultSort);




// Exercise 11. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
// Input
let input = "hello world";
//let input = 123;
//let input = true;
let checker1 = "a";
let checker2 = 1;
let resultCheck;
// Process
if(typeof input === typeof checker1){
    resultCheck = `1. data type is = ${typeof input}`;
}
else if(typeof input === typeof checker2){
    resultCheck = `2. data type is = ${typeof input}`;
}
else{
    resultCheck = `3. data type is = ${typeof input}`;
}
// Output
console.log(resultCheck);




// Exercise 12. Write a code to change every letter a into * from a string of input
// Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
// Input
let letter = "An apple a day keeps the doctor away, yeaaaaahhh no medical bill";
let resultLetter = "";
// Process
for(let i = 0; i <= letter.length; i++){
    if((letter.charAt(i) === "a") || (letter.charAt(i) === "A")){
        resultLetter += "*"
    }
    else{
        resultLetter += letter.charAt(i);
    }
}
// Output
console.log(resultLetter);
