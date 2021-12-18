
/*
//VARIABLES STORE ONE VALUE!!! 
let num;

num = 71;


//ARRAY STORES MULTIPLE VALUES 

//creating an empty array
const numbers  = [];


//create an array with values
//numbers 
const numbers2 = [6,8,9,69,1,3,10,11,9,100];

numbers2.push(2);

//add 4th number to the 7th number in the array
console.log(numbers2[3]);
console.log(numbers2[6]);
const sum = numbers2[3] + numbers2[6];


//string array
const movies = ["Spiderman : No Way Home", "Matrix 4","Titanic", "Avengers: End Game", "Bad Boys II"];

console.log(movies[1]);
console.log(movies.length); // THis tells you how many values are CURRENTLY STORED IN THE ARRAY

movies.push("Lion King");
movies.push("Avatar");


console.log(movies.length); // THis tells you how many values are CURRENTLY STORED IN THE ARRAY



//movies[1]= "Matrix 4 : Resurrections";

movies[1]= movies[1] + ": Resurrections";
console.log(movies[1]);

//boolean Array
const sampleArray = [true,false,true,true,false,false];
*/


const Movie = require("./js/Movie.js");

const main = (()=>{

    /*
        I want to know if your movies database has a particular
        movie

        Using ALL OF YOUR PROGRAMMING KNOWLEDGE THUS FAR, COME UP
        WITH AN EFFICIENT WAY OF DOING THE ABOVE!!! 

    */

    //I  want my movies array to be an OBJECT ARRAY
 const movies = [];
  
 movies.push(new Movie("Spiderman : No Way HOme", 140, "PG-13"));
 movies.push(new Movie("Matrix 4", 120, "R"));
 movies.push(new Movie("Titanic", 300, "G"));


 /*
    Write the command that will print out the name of the last movie in the array.
    YOu are to assume, that you DO NOT KNOW WHAT THE CURRENT SIZE OF THE ARRAY IS
 */

console.log(movies[movies.length-1].title);

})();