//Leap Year Checker//
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} is a Leap Year.`);
    } else {
        console.log(`${year} is not a Leap Year.`);
    }
}

isLeapYear(2024);  
isLeapYear(1900);  
isLeapYear(2000);  



//Ticket Pricing//
function getTicketPrice(age) {
    let price;
    if (age <= 12) {
        price = 10;
    } else if (age >= 13 && age <= 17) {
        price = 15;
    } else {
        price = 20;
    }
    console.log(`The ticket price for someone aged ${age} is $${price}.`);
}


getTicketPrice(10); 
getTicketPrice(15);  
getTicketPrice(30);  





//Decision Making (if-else and switch)//
 //Leap Year Checker//

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log(`${year} is a Leap Year.`);
    } else {
        console.log(`${year} is not a Leap Year.`);
    }
}


isLeapYear(2024);  
isLeapYear(1900);  
isLeapYear(2000);  


// Ticket Pricing

function getTicketPrice(age) {
    let price;
    if (age <= 12) {
        price = 10;
    } else if (age >= 13 && age <= 17) {
        price = 15;
    } else {
        price = 20;
    }
    console.log(`The ticket price for someone aged ${age} is $${price}.`);
}


getTicketPrice(10);  
getTicketPrice(15);  
getTicketPrice(30);  


//Recursion
//Fibonacci Sequence

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}


console.log(`The 5th Fibonacci number is ${fibonacci(5)}`); 


// Palindrome Checker
function isPalindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); 
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) return false;
    return isPalindrome(str.substring(1, str.length - 1));
}


console.log(isPalindrome("A man a plan a canal Panama")); 
console.log(isPalindrome("Not a palindrome"));              