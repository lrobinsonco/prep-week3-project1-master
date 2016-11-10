/*
=======================================================

** Week 3 - Project 1 **
*** Function Exercises ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

BASIC TRACK: 1-10
ADVANCED TRACK: 11-15
=======================================================
*/


document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");
// 1. Create a function that simply returns a string that says something funny
//    when it is called and then displayed into the HTML page.
function funny(){
  return "something funny"
}
document.getElementById("q1").innerHTML = funny();
console.log (funny())


// 2. Define a function called "divideByTwo".
//    It should accept one parameter within a text field called "number" and
//    submitted when a button is clicked.
//    The function should divide the number by two and
//    then displayed into the HTML page.
function divideByTwo(number) {
return number / 2
}
document.getElementById("button1").addEventListener("click", function(){
  document.getElementById("q2").innerHTML= divideByTwo(document.getElementById("Q2input").value)
})




// 3. Define a function called "greeting".
//    It should accept two parameters within input fields, which will both be first names.
//    The function should display to the HTML page a greeting to both people.
var greeting = function (firstName1, firstName2){
  return "hello " + firstName1 + " and " + firstName2
}
console.log(greeting('lee', 'nara'))
document.getElementById("greetingButton").addEventListener("click", function(){
  var name1= document.getElementById("q3input1").value
  var name2= document.getElementById("q3input2").value
  document.getElementById("q3output").innerHTML= greeting(name1, name2)
})

// 4. Create a function that finds the average of 6 numbers passed in when called
//    and returns the value and is then displayed in the HTML page.
var calcAverage = function (input1, input2, input3, input4, input5, input6) {
  var average=((input1+input2+input3+input4+input5+input6)/2).toFixed(2)
return "The average is " + average
}
document.getElementById("average").addEventListener("click", function(){
  var input1= document.getElementById("q4input1").value
  var input2= document.getElementById("q4input2").value
  var input3= document.getElementById("q4input3").value
  var input4= document.getElementById("q4input4").value
  var input5= document.getElementById("q4input5").value
  var input6= document.getElementById("q4input6").value
  document.getElementById("q4").innerHTML= calcAverage(input1, input2, input3, input4, input5, input6)
})


// 5. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month.
//    Write a function that takes the price per unit and calculates the total for you each month.
//    Since the price of the cashews can change anytime, pass that amount into the function to get your total price.
var total = function(price){
  return (6 * price)
}
//console.log('Your total is ' + total(12) + ".");
document.getElementById("nutButton").addEventListener("click", function(){
  var nutPrice= document.getElementById("q5Input").value
  document.getElementById("q5Output").innerHTML= ('Your total is ' + total(nutPrice) + ".")
  })


// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.
var area = function(length, width){
  return length * width
}
//console.log(area (4,2));

var perimeter = function(length, width){
  return (2 * length + 2 * width)
}
//console.log(perimeter(4,2));
document.getElementById("aAndP").addEventListener("click", function(){
  var lenghtOutput= document.getElementById("q6Inputa").value
  var widthOutput= document.getElementById("q6Inputb").value
  document.getElementById("q6Outputa").innerHTML= ('The area is= ' + area(lenghtOutput, widthOutput) + ".")
  document.getElementById("q6Outputb").innerHTML= ('The perimeter is= ' + perimeter(lenghtOutput, widthOutput) + ".")
  })



// 7. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.
var quarter = function(number){
  return number / 4;
}
//console.log(quarter(4));
document.getElementById("quarter").addEventListener("click", function(){
  var oneQuarter= document.getElementById("q7Input").value
  document.getElementById("q7").innerHTML= ('One Quarter is ' + quarter(oneQuarter) + ".")
  })



// 8. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, display a statement to the HTML page about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.
var sleepings = function(hours){
  if (hours >=8) {
    return "You're getting enough rest"
  } else if (hours < 8 && hours > 6){
    return "You need more sleep."
  } else {
    return "go to bed."
  }
}
document.getElementById("advice").addEventListener("click", function(){
  var advice= document.getElementById("q8Input").value
  document.getElementById("q8").innerHTML= (sleepings(advice))
  })



// 9. Develop a function that determines a person's age by asking them for their birth year.
var ageFinder = function(birthYear){
  var age = (2016 - birthYear)
  return "You are " + age + " years old."
}
document.getElementById("age").addEventListener("click", function(){
  var yearsOld= document.getElementById("q9Input").value
  document.getElementById("q9").innerHTML= (ageFinder(yearsOld))
  })



// 10. Write a function that accepts the following array and separates the people into two teams. Display each team within the HTML page.
//    No names next to each other in the array should be on the same team.
     teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]
     var teamA = []
     var teamB = []
     var splitTeams = function(arrayOfPeople){
       for(i=0; i< arrayOfPeople.length; i+=2){
         teamA.push(arrayOfPeople[i])
       } for (i=1; i< arrayOfPeople.length; i+=2){
         teamB.push(arrayOfPeople[i])
       }
       //console.log('teamA is ' + teamA);
       //console.log('teamB is ' + teamB);
     }
     document.getElementById("teams").addEventListener("click", function(){
       splitTeams(teammates)
       document.getElementById("q10a").innerHTML= ('teamA is: ' + teamA)
       document.getElementById("q10b").innerHTML= ('teamB is: ' + teamB)
     })





// 11. Allow a user to enter a three digit number.
//     Write a function that adds the numbers together.
//     Hint #1: You need to turn a string into an integer.
//     Hint #2: Strings can be treated as arrays too.
var threes = function(userInput){
  var stringSplit = userInput.split("");
  var total = 0;
  for(i=0; i<stringSplit.length; i++){
    var num = parseInt(stringSplit[i])
    total += num
  }
  return "The total is: " + total;
}
document.getElementById("sum").addEventListener("click", function(){
  var sum= document.getElementById("q11Input").value
  document.getElementById("q11").innerHTML= (threes(sum))
  })




// 12. You've finally gotten around to counting the change in your piggy bank.
//     Write a function that accepts four parameters from a user (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Understanding the toFixed method will help you with the format.
var change = function (quarters, dimes, nickels, pennies) {
  var qTotal = (quarters * .25);
  var dTotal = (dimes * .10);
  var nTotal = (nickels * .05);
  var pTotal = (pennies * .01);
  var gTotal = (qTotal + dTotal + nTotal + pTotal)
  return "$" + gTotal.toFixed(2);

}
//console.log(change(24, 12, 6, 3, 1));

document.getElementById("totalChange").addEventListener("click", function(){
  var qt= document.getElementById("quarters").value
  var dm= document.getElementById("dimes").value
  var nk= document.getElementById("nickels").value
  var pn= document.getElementById("pennies").value

  document.getElementById("q12").innerHTML= (change(qt, dm, nk, pn))
  })











// ADVANCED TRACK



// A. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.



// B. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]



// C. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     Display the result in the HTML page.
//     To get the random number rolled by each die, use Math.random and Math.floor.



// D. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.



// E. Write a function that takes a year from a user
//    and reports whether or not it is a leap year.
//    Display the result in the HTML page.
//    Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is. 1900 is not a leapyear, but 2000 is.
