//Task 1 

var firstName = prompt("Enter your first name ");
var LastName = prompt("Enter your last name");
 var fullName = firstName + " " + LastName 

 alert("Hello and Good Luck " + fullName);

//TASk 2 

var yourfav = prompt("Enter about your favourite phone")
var l = yourfav.length;
document.write("Your favourite phoe is " + yourfav + "<br/>");

document.write("length of the string is : " + l );


//TASK 3
var str = "Pakistani"
var n = str.indexOf("n")
document.write("<br/>Index of 'n' :" + n)

//TASK 4
var str1 = "Hello World"
var s = str1.lastIndexOf("l")
document.write("<br/>Index of 'l' :" + s)

//TASK 5 
var str2 = "Pakistan"
var a = str2.charAt(3)
document.write("<br/> " + a)

//TASK 6 

var firstName1 = prompt("Enter your first name ");
var LastName1 = prompt("Enter your last name");

var C = firstName1.concat( " " , LastName1)

alert(C);


// TASK 7


var City = "Hyderabad"
var rep = City.replace("Hyder" , "Islam");
document.write("City = " + City)
document.write("<br/>After Replacement = " + rep)


//TASK 8 
var text = "Ali and Sami are best friends. They play cricket and football together";
 var replace = text.replace(/and/g , "&")
 document.write("<br/> Before Replacement "  + text)
 document.write("<br/> After Replacement "  +replace)

//TASK 9

var num = "472";
document.write("<br/> Value :" + num)
document.write("<br/> Type : "+ typeof(num))
num1 = parseInt(num);
document.write("<br/> Value :" + num1)
var new1 = typeof(num1)
document.write("<br/> Type : " +new1)

//TASK 10
 
var pea = prompt("write any word in lower case")
document.write("</br>User Input : " +pea)
pea = pea.toUpperCase();
document.write("</br>Upper case : " +pea)

//TASK 11

var str = prompt("enter the word to change intitle case")
document.write("<br/>User input  : " + str)
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
     
  document.write("<br/>Title case : " + str)

  //TASK 12

  var num = 33.56;
  document.write( typeof(num) + " " +  num) 
  num1 = num.toString().replace("." , "");
  
  document.write("<br/> Result :" + num1);


  //TASK 13

  var UserName1 = prompt("Please enter your username")
  
  for (i= 0 ; i < UserName1.length ; i++){
  var check = UserName1.includes("@");
  var check1 = UserName1.includes("!");
  var check2 = UserName1.includes(",");
  var check3 = UserName1.includes(".");
      if(check == true || check1 == true || check2 == true || check3 ==true){
        alert(" enter a valid username")
        break
      }else{
        alert("Welcome " + UserName1)
        break
      }
  }
  

  //TASK 14 

var A = ["cake", "apple pie" , "cookie" , "chips", "patties"];

var b = prompt("'Welcome to SYED BAKERS ' What do you want  order SIR /MAA'M ")
var d = b.toLowerCase()
for (i = 0 ; i<A.length ; i++){
    var c = A.indexOf(b , i )
    if(d==A[i]){
    alert("Yes we have " + b + " at index " + [i] + " .")
    break;
}}

    
    if( i == A.length && d!==[i]){
        alert("Sorry Sir we dont have " + b);
    }
    

//TASK 15 



document.write("<h1>Guide lines for user name</h1> <br>")
document.write("<br/> a. It should contain alphabets and numbers ")
document.write("<br/> b. It should not start with a number  ")
document.write("<br/> c. It must at least 6 characters long ")
var username = prompt("Enter your UserName");
var charAny;
var num = false;
var indexnum;

while (username.length < 6){
  alert("It must at least 6 characters long")
  username =  prompt("Please Enter your Username")
}

charAny = username.substr(0, 1);
while (charAny !== isLetter()){
  alert("It should not start with a number ")
  username =  prompt("Please Enter your Username")
}

while (num !== false){
  for (indexnum = 1 ; indexnum < username.length ; indexnum++){
    num = username.substr(0, indexnum);
    if (isNumeric(charAny)){
      num = true;
    }
  }

}
while (num !== true){
  alert("It should contain alphabets and numbers ");
  username =  prompt("Please Enter your Username")
}

//TASK 16

var university = "University of Karachi";

var split = university.split("")

for (l  =0 ; l < university.length ; l++){
  document.write("<br/> "+ split[l])
}
//TASK 17

var user = prompt("Enter string")
document.write("<br/> User Input :"  + user)
document.write("<br/> Last Character : " + user.charAt(user.length - 1))

//TASK 18
var TExt = "The quick brown fox jumps over the lazy dog";
document.write("<br/> Text : " + TExt)
var chk = TExt.match(/the/gi).length;
document.write("</br> Ther are "+chk + " occurrencse(s) of word 'the'")

