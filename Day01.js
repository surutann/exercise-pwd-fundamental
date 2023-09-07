// EXERCISE 1 and 2
// Area and perimeter of rectangle

// Input = length, width
let length = 100;
let width = 300;

// Process
let area = length * width;
// Output
console.log("area of rectangle is ", area);

// Process
let perimeter = 2 * (length + width);
// Output
console.log("perimeter of rectangle is ", perimeter);




// EXERCISE 3
// Find diameter, area, and circumference of a circle
// Input
let radius = 10;
const pi = Math.PI;

// Process
let diameter = radius * 2;
// Output
console.log("Diameter of circle = ", diameter);

// Process
let circleArea = pi * radius * radius
// Output
console.log("Area of Circle = ", circleArea);

// Process
let circleCircumference = 2 * pi * radius;
// Output
console.log("Circumference of circle = ", circleCircumference);




// EXERCISE 4
// Find angles of triangle if two angles are given
// Input
let angle1 = 90;
let angle2 = 60;

// Process
let angle3 = 180 - angle1 - angle2;
// Output
console.log("Third angle of triangle is = ", Math.abs(angle3), "degree")




// EXERCISE 5
// Write a code to get difference between dates in days
// Input
const dateX = new Date("11/18/2011");
const dateY = new Date("11/18/2012");

// Process and Output
console.log("Difference in millisenconds is", Math.abs(dateY - dateX), "ms");
console.log("Difference in days is", Math.abs(dateY - dateX) / 1000 / 60 / 60 / 24, "days");




// EXERCISE 6
// Write a code to convert days to years, months, and days
// Input
let inputDay = 400;

// Process for year
let m1 = inputDay % 365;
let years = inputDay - m1;

// Process for month
let m2 = m1 % 30;
let months = m1 - m2;

// Process for days
let days = m2;

// Output
console.log(years / 365);
console.log(months / 30);
console.log(days);
