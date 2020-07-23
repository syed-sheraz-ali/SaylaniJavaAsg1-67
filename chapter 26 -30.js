
//TASK 1

var num = +prompt("Insert a positive integer");
if (num >1 ){
    numfunction();
}else{
    alert("Kindly insert positive integer")
}

function numfunction(){
    document.write("<br/>Number :  " + num )
    document.write("<br/> Round off Value :" + Math.round(num))
    document.write("<br/> Floor value :" + Math.floor(num))
    document.write("<br/> Ceil :" + Math.ceil(num))
}

//TASK 2 
var num1 = +prompt("Enter the negative floating point . e.g = -2.2")

if (num1<1){
    num1function();

}else{
    alert("Kindly enter the negative floating number ")
}

function num1function(){
    document.write("<br/><br/>Number :  " + num1 )
    document.write("<br/> Round off Value :" + Math.round(num1))
    document.write("<br/> Floor value :" + Math.floor(num1))
    document.write("<br/> Ceil :" + Math.ceil(num1))

}

//TASK 3 
 var num3 = +prompt("Enter the number for absolute value ")

 document.write("<br/> The absolute value of " + num3+ " is :" + Math.abs(num3))


//TASK 4 
var random = Math.floor(Math.random() *  6 ) +1
document.write("<br/>Random Dice value is " + random)

//TASK 5 
var random1 = Math.floor(Math.random() * 2 ) +1
document.write("<br/> " + random1)

if (random1 === 1){
    document.write("<br/>Random Coin value is : Heads")

}else {
    document.write("<br/>Random Coin value is :  Tails")
}

//TASk 6 

var random2 = Math.floor(Math.random() *99) +1
document.write("<br/> random number between 1 and 100 is : " + random2 )

//TASK 7 
var weight = prompt("Enter your wieght in kilograms ")
var con = parseInt(weight)
document.write("<br/> The weight of user is " + con + " Kilograms")

//TASK 8
var random3 = Math.floor(Math.random() *9) +1

var guess = +prompt("Guess the number between 1 - 10")
if (guess === random3){
    alert("Congratulation you got the number ")
}else {
    alert("Sorry try again")
}