// JS CHAPTER 21 -30 ASSIGNMENT

// Chapter 21 (Changing Case)
// Q1  ANSWER
// var allLower = userInput.toLowerCase();

// Q2  ANSWER

// var x = "Good Morning";

// x = x.toLowerCase();

// console.log(x);

// Q3  ANSWER

// var y = "good morning";

// y = y.toUpperCase();

// console.log(y)


// Q4  ANSWER

// var orignalString = "HELLO WORLD";

// var lowerCaseString = orignalString.toLowerCase();
// console.log(lowerCaseString)


// Q5  ANSWER

// var arr = ["GOOD","MORNING",];

// var lowerCaseString = arr[0].toLowerCase();

// console.log(lowerCaseString);


// Q6  ANSWER

// var variable = "hello world";

// var upperCaseString = variable.toUpperCase();

// alert(upperCaseString);


// Q7  ANSWER

// var cityName = "kaRacHi";

// var  capitalizedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

// console.log(capitalizedCityName);

// another way

// var  cityName = "kaRacHi";

// var firstNmae = cityName.slice(0,1).toUpperCase();

// var remainchar = cityName.slice(1).toLowerCase();

// var completeword = firstNmae + remainchar;

// console.log(completeword);

// 

//   Chapter 22 - 25 (Strings)
// // Q1 ANSWER                  

// var sameWords = "captain";

// var sliceString =sameWords.slice(1,3);

// console.log(sliceString);

// // another way

// var sameWords = "captain";
// var slicedString = sameWords.slice(0, 1) + sameWords.slice(3);
// console.log(slicedString);

// Q2 ANSWER

// var str = "Hello, World!";

// var numCharacters = str.length;

// console.log(numCharacters);


// Q3 ANSWER

// var animal = "elephant";

// var seg =animal.slice(1,5);

// console.log(seg);

// Q4 ANSWER

// var string = "The number of characters in the string will be assigned to the variable.";

// var characterCount = string.length;

// console.log(characterCount); // Output: 72


// Q5 ANSWER

// var string = "My World";

// var characterCount = string.length;

// console.log(characterCount);

// // number of character is 8

// var orignalString = "My World";

// var slicedString = orignalString.slice(1,-3);

// console.log(slicedString);

// Q6 ANSWER

// var text = "To be or not to be.";

// var indx = text.indexOf("be");

// console.log(indx);


// Q7 ANSWER

// var text = "To be or not to be.";

// var indx = text.lastIndexOf("be");

// console.log(indx);


// Q8 ANSWER


// var text = "This is a string with multiple instances of go. Let's find the index of the first character of the last instance.";

// var indx = text.lastIndexOf("go");

// console.log(indx); 


// // Q9 ANSWER

//  if (indexNum !== -1) {



// Q10 ANSWER

// var str =  "abcde";

// var character = str.charAt(2);

// console.log(character);
// // answer is    (c)


// // Q11 ANSWER

// var text = "welcome into mine world.";

// var cha = text.charAt(10);

// console.log(cha);
// //  in character spaces also include


// Q12 ANSWER

// var str = "welcome into mine world.";

// var x = str.charAt(str.length -1);

// console.log(x);


// // Q13 ANSWER

// var input = "example";

// var cha = input.charAt(5);

// console.log(cha);


// Q14 ANSWER

// var string = "example";

// if(string.charAt(2) === "a"){
// //     alert("right");
// // }else{
// //     alert("not right");
// // }


// // Q15 ANSWER

// var string = "example";

// var array = [];

// for (var i = 0; i < string.length; i++){
//  array.push(string[i]);
// }

// console.log(array);

// var reply = "no, not now" ;

// var revisedReplay = reply.replace("no","yes");

// console.log(revisedReplay);


// // Q16 ANSWER

// var str ="This is 1 string with multiple 1s.";

// var newStr = str.replace("1", "one") ;

// console.log(newStr) ;

// Q17 ANSWER

// var x = "This is a.";

// var y = x.replace( /a/g, "z");

// console.log(y);


// Chapter 26 (Rounding Numbers)

// // Q1 ANSWER

// round a number to nearest integer

var number = 3.5;

var roundedNumber = Math.round(number);

console.log(roundedNumber) ;

// // anotherway

// var number = 3.5;
// console.log(Math.round(number));


// // Q2 ANSWER

// // round up a number

// var origNum = 3.5;

// var roundNum = Math.ceil(origNum);

// console.log(roundNum);


// Q3 ANSWER

// round down a number

// var origNum = 3.5;

// var roundNum = Math.floor(origNum) ;

// console.log(roundNum);


// // Q4 ANSWER

// var num = 3.14159 ;

// var roundNum = Math.round(num);

// console.log(roundNum);


// // Q5 ANSWER
// // not sure
// var number = 0.5;
// var  roundedNumber = Math.round(number);

// console.log(roundedNumber);



// Chapter 27 (Random Numbers)

// // Q1 ANSWER

// var randomNum = Math.floor(Math.random()* 50) + 1 ;

// console.log(randomNum);

// // Q2 ANSWER

var  randomNumber = Math.floor(Math.random()* 100) + 1 ;

console.log(randomNumber) ;


// // // Q3 ANSWER

// var diceRoll = Math.floor(Math.random()* 6 ) +1 ;

// console.log("You rolled a " + diceRoll) ;

// // alert("You rolled a " + diceRoll) ;


// // Q4 ANSWER

// var headUser = prompt("Enter head userName");

// var tailUser = prompt("Enter tail userName");

// var toss = Math.random() * 2;

// var floor = Math.floor(toss);

// if(floor === 0 )
// {
//     alert("Heads " + headUser + " Win the toss ") ;
// }
// else
// {
//     alert("Tails " + tailUser + " Win the toss ") ;
// }


// Chapter 28, 29 (Converting Strings)

// // Q1 ANSWER

var str = "1234" ;

var num = parseInt(str);

console.log(num);


// // Q2 ANSWER

var str = "123" ;

var num = parseInt(str);

console.log(num);


// // Q3 ANSWER


var str = "3.14159" ;

var num = parseFloat(str);

console.log(num);



// // Q4 ANSWER

var str = "123" ;

var num = parseInt(str);

if(!isNaN(num)) {
    console.log("the string can be  converted to an integer.");
}
else{
    console.log("the string cannot be converted to an integer.");
}



// // Q5 ANSWER

var num = 15;
var text = num.toString();

console.log(text);


//   anotherway
var num = 15;
var text = num.toString(2);
console.log(text);


// // Q6 ANSWER

var num = 42 ;

var text = num.toString();

console.log(text);


// // Q7 ANSWER

// var decimalString = "3.14";

// var roundInteger = Math.round(parseFloat(decimalString));
// console.log(roundInteger);





// Chapter 30  (Controlling the length of 
//     decimals)

// // Q1 ANSWER

// var num = 3.14159265359;
// var strNum = num.toFixed(4);

// console.log(strNum);

// // Q2 ANSWER

// var n = 3.14159265359;
// n = Number(n.toFixed(2));
//   console.log(n);


// // Q3 ANSWER

//  var num = 234;
//  if (num.toFixed(2).toString().length > 4) {

//     console.log(num);
//  }

// // Q4 ANSWER

// var num = 1.123456;
// var roundString = num.toFixed(2);
// console.log(roundString);

// another way

// var myNumber = 3.14159265359;
// var roundedString = myNumber.toFixed(2);
// alert(roundedString);
