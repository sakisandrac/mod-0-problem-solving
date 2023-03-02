// 1. Given an array of strings, return only the strings that have exactly 4 characters.
// Goal: Print out all the elements in an array that have exactly 4 characters 
// if (characterLength === 4){
//     print word 
// }
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
// // for (everyElementInArray){
//     print lowerCaseLetters
// }

var animals = ['BaT', 'COw', 'mOnKey']
for (var i=0; i < animals.length; i++){
    console.log(animals[i].toLowerCase());
}

// 3. Given an array of strings, return only the words that begin with the letter "t".

// 4. Start with an array of strings. Print only the words that include the letter combination "ing".
//Goal- print the words that end in "ing" in a given array
// if (words include ing){
//     print words
// }
var verbs = ['running', 'walking', 'talk', 'eat']
for (var i=0; i < verbs.length; i++){
    if (verbs[i].endsWith('ing')){
        console.log(verbs[i]);
    }
}
// 5. Start with an array of travel destinations. Print every travel destination in alphabetical order embedded in a sentence using string interpolation. For example, if the destination is "New York City", print something like "The next place I want to visit is New York City!" 

// 6. Given a sentence with only lowercase letters, print the same sentence with the first letter of every word capitalized. For example, if you were given "Turing is the best", return "Turing Is The Best" instead!
