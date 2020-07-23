// chapter 4 task : 1

var variable_1 = "Syed Sheraz Ali"
var variable_2 =  "Telecommunication Engineer & Web Develpoer"
var variable_3 = "IQRA UNIVERSITY"

document.write("Hi ! This is " + variable_1 + " I am " + variable_2 + " from " + variable_3);


// chapter 4 task : 2 illegal variables

// var first-1 = "Mango";          using operator 
// var 89      = "orange";         Number cancelAnimationFrame,t be declare in variable name 
// var 9first  = "graps";          starting with number  
// var %name   = "water melon"     starting wiih operator
// var sher@z  = "dates"           using Symbol
//  alert(89);

//    chapter 4 task :2 legal variable

var FirstName    = "Syed"    //using camel case
var Middle_name  = "Sheraz"  //underscore is allowed
var LASTNAME     = "Ali"     //uppercase is allowed
var age9         = "22"      //numeric value after alphabet is allowed
var $city        = "Karachi" //dollar symbol is allowed  

        
// chapter 4 task :3 

var Heading = "Rules for naming JS variables ";
document.write("<h1>" + Heading + "</h1> <br/> <br/>  <br/>")

var a = "number "
var b = "_"
var c = "$"

document.write("Variables names can only contain , " + a +" , " + b + " , " + c + " . For example $my_1stVariable")


var d = "letter";
var e = "$";
var f = "_";

document.write("<br />Variables must begin with a " + d + " , " + e + " or " + f  + " . For example $name, or name  _name")


var CAse = "sensitive"
document.write("<br/> Variable names are " + CAse + " .");


var key =  "keyword"; //for example "case"
document.write("<br/> Variables names shouls not be JS " + key +  " .")
