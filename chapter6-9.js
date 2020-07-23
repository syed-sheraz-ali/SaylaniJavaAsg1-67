// chapter 6-9 task1 

var number = prompt("Enter the value of variable")



document.write("<h1>Results</h1>")
document.write("<br> The value of a input variable is = "+ number + ".")
document.write("<br><hr> The value of a ++variable is = "+ ++number + ".")
document.write("<br> Now the value of variable  is = "+ number + ".")

document.write("<br><br><br><br> Now the value of variable++  is = " + number++ + ".")
document.write("<br> Now the value of variable  is = "+ number + ".")

document.write("<br><br><br><br> Now the value of --variable  is = " + --number + ".")
document.write("<br> Now the value of variable  is = "+ number + ".")

document.write("<br><br><br><br> Now the value of variable--  is = " + number-- + ".")
document.write("<br> Now the value of variable  is = "+ number + ".")

// chapter 6-9 task 2

var a = 2, b = 1; var result = --a - --b + ++b + b--; 
document.write("<br><br> <br>Explained in Comments breifly.  Why answer is : " + result)
// The answer is 3
// --a : This is called pre decrement it means at this stage value of a = 1 beacuse -- before variable has already decrease it value .

// --a - --b: Now in our result variable defiantion the value of --a is = 1 and --b = 0 means it will be decreased now the value of both are 
// 1 & 0  so 1 - 0 = 1 
// ++b : it means it has increase value before implementation of this line so value of b becomes 1 instead of 0.
// b-- : it means it will decrease after this line execution . So value of b is stil 1.
// --a - --b + ++b  = 1 + 1 = 2
// a - --b + ++b + b-- = 1 + 1 +1 = 3



// chapter 6-9 task 3 

var name = prompt("Enter your name " , "write here")
alert("Welcome " +  name )



// chapter 6-9 task 4 & 5

    document.write("<br><br><h1>Table of Desire Number</h1>")
    var input = prompt("input the number of table you want")
    if (input != 5 && input!= 0 && input!=null) {
    for(i = 1;  i <= 10; i++){
        document.write("<br>"+ input + " * " + i + "  =  " + input*i + "<br>")

    }
    }
    else{
        for(i = 1;  i <= 10; i++){
            document.write("<br>"+  " 5 * " + i + "  =  " + 5*i + "<br>");
    
        }
    }

    // chapter 6-9 task 6 in HTML file

    




