// 1. Given an array of strings, return only the strings that have exactly 4 characters.
// Goal: Print out all the elements in an array that have exactly 4 characters 
// Pseudocode:
// Create an array with a few names that have both have names that are 4 characters or less and more
// Use a for loop to iterate over all the elements in the array
// Check if the length of each letter is 4 letters or less 
// Print the elements in the array that are less than 4 letters 

var names = ['Jack', 'Sally', 'Hank', 'Harry']

function fourLetters(theArray){
    for (var i=0; i < theArray.length; i++){
        if (theArray[i].length === 4){
            console.log(theArray[i]);
        }
    }
}

fourLetters(names);

// 2. Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.
//Goal: Print every word in the array with lowercase letters
// Pseudocode:
// Create an array with string elements that are using different cases 
// Create a funtion that will pass in a paramenter with an array as the argument.
// Use a for loop to iterate each element in the array
// Use the method .toLowerCase() to turn all characters in the array into lowercase letters
// console log to print the changed elements
// call the function to check if it works! 


var animals = ['BaT', 'COw', 'mOnKey']
function lowerCased(theArray){
    for (var i=0; i < theArray.length; i++){
    console.log(theArray[i].toLowerCase());
    }
}

lowerCased(animals);

// 3. Given an array of strings, return only the words that begin with the letter "t".
// Goal: Check if strings in an array start with the letter t and pring those string
// Pseudocode:
// Create an array with multiple strings that contain both words that have strings that start wtih t and ones that don't.
// use a for loop to iterate over the array
// make all letters to lower case
// check if the string starts with t 
// print out array 

var cars = ["Toyota", "Subaru", "Tesla", "Honda"]
for (var i=0; i < cars.length; i++){
    if (cars[i].toLowerCase().startsWith('t')){
    console.log(cars[i]);
    }
}

//4. Start with an array of strings. Print only the words that include the letter combination "ing".
//Goal- print the words that end in "ing" in a given array
// Pseudocode:
// Create an array with strings that have both words ending in ing and words not ending in ing 
// Create a function that has a parameter that passes in an array as an argument
// Use a for loop to iterate through the array
// Check if the element in the array ends with ing
// Print the elements 
// Research: method that checks characters in a string

var verbs = ['running', 'walking', 'talk', 'eat']

function ingWords(anArray){
    for (var i=0; i < anArray.length; i++){
        if (anArray[i].endsWith('ing')){
            console.log(anArray[i]);
        }
    }
}

ingWords(verbs);

// 5. Start with an array of travel destinations. Print every travel destination in alphabetical order embedded in a sentence using string interpolation. For example, if the destination is "New York City", print something like "The next place I want to visit is New York City!" 


//Goal: to use interpolation to print out a string with different destinations from an array 
// Pseudo code: create an array with different cities
// use a for loop to iterate over the array
// in the loop Print out a string using interpolation for each city

var cities = ["Boulder", "Paris", "Dubai", "Seattle"]
for (var i = 0; i < cities.length; i++) {
    console.log(`My next travel destination is: ${cities[i]}`);
}

// 6. Given a sentence with only lowercase letters, print the same sentence with the first letter of every word capitalized. For example, if you were given "Turing is the best", return "Turing Is The Best" instead!

//Goal: print out a string with the first letter of every word capitalized
//Pseudocode: create an variable assigned to a string
// Use a method to change each first letter of each word 
// Use toUpperCase to change each of those letters 
// research methods that can change the index of a string

var str = "turing is the best"

var str2 = str.split('')

str2[0] = str2[0].toUpperCase()
str2[7] = str2[7].toUpperCase()
str2[10] = str2[10].toUpperCase()
str2[14] = str2[14].toUpperCase()

console.log(str2.join(''))