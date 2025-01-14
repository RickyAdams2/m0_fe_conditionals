// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false
console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log("Is numberTeachers not equal to numberStudents", numberTeachers !== numberStudents);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log("Is numberStudents grater than or equal to 20?", numberStudents >= 20);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21);

// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: This line of code is determinging the comparison of variables 4 and 9, and if 4 is less than 9. This should log as false.

var books = 3;
console.log(4 < books);
// YOU DO: This line of code is assigning the variable books as three. Then the line below asks us to compare
//the number 4 to the variable books. Since 4 is not less than the variable books, this should log as false.


var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: The first line of code is assigning the variable friends as 6, and the second line of code is assigning the variable siblings
// as 2. The 3rd line of code is comparing the values of each variable by asking if the variable friends is more than the
//valu of siblings. This should log true.

var attendees = 9;
var meals = 8;
console.log(attendees != meals);
// YOU DO: The first line of code assigns the variable attendees to 9, while the second line of code assigns the variable meals to 8.
// The third line of cone is compaing the variables by asking if the variable attendees is not stricktly equal to the variables
// meals. This should log as true.

// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
false
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);
true

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats)


// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark)



// Determine if the dog loves to play or loves the dog park
// console.log(lovestoPlay || lovesDogPark)
console.log(lovesToPlay || lovesDogPark)




// Determine if the dog loves to play and is a puppy
// console.log(lovestoPlay && age)
console.log(lovesToPlay && age)

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: My final line of code evaluated to 1. I think that is because we didn't compare 2 of the same data types. The
// variable "lovesToPlay is assigned as a Boolean, while the variable "age" is assigned as a number.

// this is just another examples I tried out of curiosity.
// console.log(lovesToPlay && isAPuppy) This did not work becsuse isAPuppy hasn't been defined.
