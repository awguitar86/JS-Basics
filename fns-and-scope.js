//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

//Code Here
function isTyler(name){
  if (name === 'Tyler'){
    return true;
  }else{
    return false;
  }
}
isTyler(name);  

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
  function getName(){
    var name = prompt("What is your name?", "your name here")
    if (name === null || name === ""){
      return "user canceled window"
    }else{
      return name;
    }
  }
  getName();
//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome(){
  alert("Welcome, " +getName());
}
welcome();

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
/* An argument is a value that gets passed into the function parameters.
 A parameter is a variable in the function declaration that receives the argument value for the problem.*/

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
/* The Javascript falsy values are false, 0 (zero), ""(empty string), null, undefined, and NaN. 
To check if something is falsy you can use an function with an if statment in it. */


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  function myName(){
    return "Austin";
  }
  myName();


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var newMyName = myName;
//Now alert the result of invoking newMyName

alert(newMyName());

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
function outerFn(){
  return function(){
    return "Austin";
  }
}
outerFn();
//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
var innerFn = outerFn();
//Now invoke innerFn.
innerFn();