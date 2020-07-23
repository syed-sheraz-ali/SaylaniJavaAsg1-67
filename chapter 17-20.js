//TASK 1
var multiARR = [[] , [] , []];

//TASK 2
var multiARR1 = [[0,1 ,2 , 3 ] , [1 , 0 , 1 , 2 ] , [2 , 1 , 0, 1 ]]
document.write(multiARR1[0])
document.write("<br/>" + multiARR1[1])
document.write("<br/>" + multiARR1[2])


//TASK 3 

var input = 1 ;
while(input <=10){
    document.write("<br/>" + input)
    input++
}


//TASK 4
var input = +prompt("Enter the number of table you want ")
var input1 = +prompt("Enter the length of table you want")
for(i = 1;  i <= input1; i++){
    document.write("<br>"+ input + " * " + i + "  =  " + input*i + "<br>")

}

//TASK 5

var fruits = ["apple" , "banana" , "mango" , "orange " , "strawberry"];

for(i = 0 ; i < fruits.length ; i++){
    document.write("Element at index " + i + " is " + fruits[i] + "<br/>")

}

//TASK 6 
i = 1;
var count = [];

index = 0
for(i=0 ; i <=15 ; i++){
    count[index] = i ;
    index++
}

document.write("<br/>Counting " + count) + "<br/>"


m = 10;
var count1 = [];

index1 = 0
for(m=10 ; m >=1 ; m--){
    count1[index1] = m ;
    index1++
}

document.write("<br/></br>Reverse Counting " + count1 + "<br/>")

f = 0;
var count3 = [];

index2 = 0
for(e=1 ; e <=11 ; e++){
    count3[index2] = f ;
    index2++
    f= f + 2;

}

document.write("<br/>Even " + count3 + "<br/>")

r = 1;
var count4 = [];

index3 = 0
for(c=1 ; c <=10 ; c++){
    count4[index3] = r ;
    index3++
    r= r + 2;

}

document.write("<br/>ODD " + count4 + "<br/>")



w = 2;
var count5 = [];

index4 = 0
for(x=1 ; x <=10 ; x++){
    count5[index4] = w+"k" ;
    index4++
    w= w + 2;

}

document.write("<br/>Series " + count5 + "<br/>")


//TASK 7 

var A = ["cake", "apple pie" , "cookie" , "chips", "patties"]

var b = prompt("'Welcome to SYED BAKERS ' What do you want  order SIR /MAA'M ")
var j = 1;
var s = 5;
for (i = 0 ; i<A.length ; i++){
    var c = A.indexOf(b , i )
    if(b==A[i]){
    alert("Yes we have " + b + " at index " + [i] + " .")
    break;
}}

    
    if( i == A.length && b!==[i]){
        alert("Sorry Sir we dont have " + b);
    }
    



//TASK 8

var array = [ 24 , 53 , 78 , 91 , 12]
var largest= 0;
document.write("<h1> Array Items :"+ array+"</h1>")
for (i=0; i<=largest; i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}
document.write("<h1>The Largest number is </h1><h2>" + largest+"</h2>")


//TASK 9
var array1 = [ 24 , 53 , 11 , 91 , 12 ,10]
var smallest= array1[0];
document.write("<h1> Array Items :"+ array1+"</h1>")
for (s=0; s<=smallest; s++){
    if (array1[s]<smallest) {
        var smallest=array1[s];
    }
}
document.write("<h1>The smallest number is </h1><h2>" + smallest +"</h2>")

// TASK 10



for (k=1 ; k<=100 ; k++ ){
    if (k%5 ==0){
        document.write("  "+ k)

    }
}
document.write(multiple)