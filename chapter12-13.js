// //task 1 not done

// var str_value = prompt("Please Enter your  Value" );
// if(str_value == str_value.isInteger ){
//          alert("Your Given Value is a Number"); }
//   else if(str_value == str_value.toString) {
//         alert("Your Given Value is a Character");
//     }

//Task # 2
var val01 = +prompt("Please Enter Number");
var val02 = +prompt("Please Enter second Number ");
if (val01 > val02) {
  alert("The Larger is : " + val01);
} else if (val02 > val01) {
  alert("The Larger is : " + val02);
} else {
  alert("Some Think  is Wrong ! ");
}

//Task 3

var x = +prompt("Please Enter  Number : ", "Your number is :");
if (x > 0) {
  alert(" Given Number is  Positive. :");
} else if (x < 0) {
  alert("Given Number is Negative.");
} else if (x === 0) {
  alert(" Given Number is equal to Zero :");
}

//Task 4

var stringl01 = "a";
var stringl02 = "e";
var stringl03 = "i";
var stringl04 = "o";
var stringl05 = "u";

var char = prompt("Please Enter An Letter", "Only one Letter");
if (
  char === stringl01 ||
  char === stringl02 ||
  char === stringl03 ||
  char === stringl04 ||
  char === stringl05
) {
  alert("True");
} else {
  alert("false");
}

//task 05

var pwd1 = "syedSheraz";
var pwd2 = prompt("Please Enter Your Password", "Your Password is");
if (pwd2 === "") {
  alert("Please enter your password");
} else if (pwd1 === pwd2) {
  alert("Correct! ");
} else {
  alert("Incorrect password !");
}

//task 07

var greeting;
var hour = 13;
if (hour < 18) {
  document.write((greeting = "<h1>Good day</h1>"));
} else {
  document.write((greeting = "<h1>Good evening</h1>"));
}

//task 07
var time = +prompt("Please Enter Current Time : ", "time e.g: 1300");

if (time >= 0000 && tim <= 1200) {
  alert("Good Morning !!");
} else if (time >= 1200 && tim <= 1700) {
  alert("Good Afternoon !!");
} else if (time >= 1700 && tim <= 2100) {
  alert("Good Evening !!");
} else if (time >= 2100 && tim <= 2400) {
  alert("Good Night  !!");
}
