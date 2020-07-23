//TASK 1

function time(){
    
var rightNow = new Date();

document.write(rightNow);
}

time();

//TASK 2 
function name(){
    
    var firsname = prompt("please enter your first name ")
    var lastname = prompt("please enter your lastName ")
    var fullName = firsname + " "+ lastname;
    alert("Have a Good Day " + fullName)

}
name();

//TASK 3

function add(){
    var input1 = +prompt("Enter the first numer for addition")
    var input2 = +prompt("Enter the second numer for addition")
    var res = input1 + input2
    alert("The answer is : " + res);
}
add();

TASK 4
var res1 ;

function calculator(res1){
    var int = +prompt("Enter the first digit")
    alert("select the operator  e.g *, / , + , -")
    var opr = prompt("Enter the operator")
    var int1 = +prompt("Enter the second digit")

    if (opr == "*"){
        res1 = int * int1
        
    }else if (opr == "+"){
        res1 = int + int1
        
    }else if (opr == "-"){
        res1 = int - int1
        
    }else if (opr == "/"){
        res1 = int / int1
        
    }else {
        alert("select proper operator")
    }
    return res1;
}

alert("The result is : " + calculator(res1))

//TASK 5
var number = +prompt("enter the number to find square")
function square(number){
    
        return Math.pow(number,2);    

}
alert("The answer is " + square(number))


//TASK 6 
var fact = +prompt("Enter the number to calculate factorial")

function factorial(fact){
    if (fact === 0){
        return 1;
    }else{
        return fact * factorial(fact-1)
    }

}

alert(factorial(fact));

//TASK 7 


 function count(input){
    var input = +prompt("Enter a digit to star counting")
    var input2 = +prompt("Enter a digit to end counting ")

 for (i= input ; i<= input2 ; i++) {
    document.write("<br/> "+ i)
 
    }
   
}
count();

// TASK 8 

function pythagorean(){
    var sideA = +prompt("Enter value of base")
    var sideB = +prompt("Enter value of perpendicular")
    nested(sideA ,sideB);
    
}

function nested(sideA , sideB){   
    res=  Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
    document.write(res)
}
pythagorean();
  

// TASK 9 
  wdith = 12
  height = 15
  function area(wdith ,height){
      return  wdith*height
  }
  document.write("Argument as value " +area(4,3))
  document.write("<br/>Argument as variable " +area(wdith , height))


// TASK 10
var str = prompt("Enter a string to check either it is palindrome or not")
function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        document.write("No given string is not a palindrome")
        break;
      }
    else{
    document.write("YEs given string is palindrome")
    break;
    }
   }}
   palindrome(str);

//   TASK 11
  var str = "The quick brown fox"
   document.write("<br/>User input  : " + str)
   function changcase(str){
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
     return  str = str.join(' ')
}
changcase(str);
  document.write("<br/>Title case : " + changcase(str))

//TASK 12


function find(str2)
{
  var array1 = str2.match(/\w[a-z]{0,}/gi);
  
  var result = array1[0];
  

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write(" Longest word in string is : "+find('Web Development Tutorial'));

// TASK 13 

function charCount(str3, lettercheck) 
{
 var letterCount = 0;
 for (var index = 0; index < str3.length; index++) 
 {
    if (str3.charAt(index) == lettercheck) 
      {
      letterCount += 1;
      }
  }
  return letterCount;
}

document.write("Number of occurrences of specified letter is " + charCount('syedsherazali14@gmail.com', 's'));

//TASK 14 

function  calcArea(radius){
    return Math.PI * radius * radius 
}
function calcCircumference(radius){
    return 2*Math.PI *radius

}
document.write("The area of a circle on basis of radius : " + calcArea(4).toFixed(2))
document.write("<br/>The circumference of a circle on basis of radius : " + calcCircumference(4).toFixed(2))
