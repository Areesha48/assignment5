//chp 5 //
//question 1 //
let num1 = 10; // first number
let num2 = 20; // second number
let sum = num1 + num2; // add the numbers and store in a new variable

document.write("The sum of " + num1 + " and " + num2 + " is: " + sum + "<br>");
 
//question 2//
let Num1 = 20; // first number
let Num2 = 10; // second number
let difference = num1 - num2; // subtract the numbers and store in a new variable

document.write("The difference of " + num1 + " and " + num2 + " is: " + difference);

//question 3 //
//a//
let myVariable;

//b//
document.write("Value after variable declaration is: " + myVariable + "<br>");

//c//
myVariable = 5;

//d//
document.write("Value after variable initialization is: " + myVariable);

//e//
myVariable++;

//f//
document.write("Value after increment is: " + myVariable + "<br>");

//g//
myVariable += 7;

//h//
document.write("Value after addition is: " + myVariable + "<br>");

//i//
myVariable--;

//j//
document.write("Value after decrement is: " + myVariable + "<br>");

//k//
document.write("Remainder after division by 3 is: " + myVariable % 3 + "<br>");



//question 4//
// Store the ticket price in a variable
let ticketPrice = 600;

// Calculate the cost of buying 5 tickets
let totalCost = ticketPrice * 5;

document.write("The cost of buying 5 movie tickets is: " + totalCost + " PKR" + "<br>");

//question 5//
// document.write("Table of 4"/n4/1 /n4/2 /n4/3 /n4/4 /n4/5 /n4/6 /n4/7 /n4/8);


// question 6//
// a. Store a Celsius temperature into a variable
let celsius = 37;

// b. Convert it to Fahrenheit & output “NNoC is NNoF”
let fahrenheit = (celsius * 9/5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F" + "<br>");

// c. Now store a Fahrenheit temperature into a variable
let fahrenheit2 = 98;

// d. Convert it to Celsius & output “NNoF is NNoC”
let celsius2 = (fahrenheit2 - 32) * 5/9;
document.write(fahrenheit2 + "°F is " + celsius2 + "°C" + "<br>");


//question 7//
 // Store the prices and quantities in variables
 let price1 = 650;
 let price2 = 1;
 let quantity1 = 3;
 let quantity2 = 7;
 let shippingCharges = 100;

 // Calculate the total cost
 let Total = (price1 * quantity1) + (price2 * quantity2) + shippingCharges;

 // Output the receipt
 document.write("Receipt:<br>");
 document.write("Price of item 1: $" + price1 + "<br>");
 document.write("Quantity of item 1: " + quantity1 + "<br>");
 document.write("Price of item 2: $" + price2 + "<br>");
 document.write("Quantity of item 2: " + quantity2 + "<br>");
 document.write("Shipping charges: $" + shippingCharges + "<br>");
 document.write("Total cost: $" + Total + "<br>");



//question 8//
// Store the total marks and marks obtained in variables
let totalMarks = 980;
let marksObtained = 804;

// Compute the percentage
let percentage = (marksObtained / totalMarks) * 100;

// Output the result
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%" +"<br>");

//question 9 //
// Store the exchange rates in variables
let usdToPkr = 104.80;
let sarToPkr = 28;

// Store the initial currencies in variables
let usd = 10;
let sar = 25;

// Convert the total currency to Pakistani Rupees in a single expression
let totalInPkr = (usd * usdToPkr) + (sar * sarToPkr);

// Output the result
document.write("Total currency in PKR: " + totalInPkr+"<br>");

//question 9 //

  // Initialize a variable with some number
  let number = 10;

  // Perform arithmetic operations in a single expression
  let result = (number + 5) * 10 / 2;

  document .write("Result :"+ result +"<br>");

 

//question 11//
// Store the current year in a variable
let currentYear = 2016;

// Store their birth year in a variable
let birthYear = 1992;

// Calculate their 2 possible ages based on the stored values
let age1 = currentYear - birthYear;
let age2 = age1 - 1;

// Output the results
document.write("Current year: " + currentYear + "<br>");
document.write("Birth year: " + birthYear + "<br>");
document.write("Your age is either " + age2 + " or " + age1 + " years old.");


//question 12 //
 // Store a radius into a variable
 let radius = 20;

 // Calculate the circumference based on the radius
 let circumference = 2 * 3.142 * radius;

 // Output the circumference
 document.write("Radius of circle is " + radius + "<br>");
 document.write("The circumference is " + circumference.toFixed(2) + "<br>");

 // Calculate the area based on the radius
 let area = 3.142 * radius * radius;

 // Output the area
 document.write("The area is " + area.toFixed(2) + "<br>");

//question 13//
// Store your favorite snack into a variable
let favoriteSnack = "chocolate chip";

// Store your current age into a variable
let currentAge = 15;

// Store a maximum age into a variable
let maxAge = 65;

// Store an estimated amount per day (as a number)
let amountPerDay = 3;

// Calculate how many you would eat total for the rest of your life
let totalAmount = (maxAge - currentAge) * 365 * amountPerDay;
document.write("Favorite snack: " + favoriteSnack + "<br>");
  document.write("Current age: " + currentAge + "<br>");
  document.write("Estimated maximum age: " + maxAge + "<br>");
  document.write("Amount of snack per day: " + amountPerDay + "<br>");
  document.write("You will need " + totalAmount + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + "." + "<br>");
