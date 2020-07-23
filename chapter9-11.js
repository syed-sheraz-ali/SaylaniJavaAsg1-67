
// // CHAPTER 9 -11 TASK # 1

// var city = prompt("Enter city name")
// var city = city.toLowerCase();

// if(city =="karachi"){
//     alert("Welcome to city of lights")
// }else
// {
//     alert("Welcome to  " + city);
// }


// // CHAPTER 9 -11 TASK # 2

// var gender = prompt("enter your gender")
// gender = gender.toLowerCase();

// if(gender == "male"){
//     alert("Good Morning Sir")
// }else
// {
//     alert("Good Morning Ma'am")
// }

// // CHAPTER 9 -11 TASK # 3

// var signal_color = prompt("Enter the signal color for example 'Red' 'Yellow' Green'")
// signal_color = signal_color.toLowerCase();
// document.write("You enter the signal color " + signal_color)

// if(signal_color == "green"){
//     document.write("<br/>Message = Move Now" )
// }else if(signal_color == "yellow"){
//     document.write("<br/>Message = Ready to move")
// }else{
//     document.write("<br/>Message = Must Stop")
// }


// // CHAPTER 9 -11 TASK # 4

// var remaining_fuel = prompt("Enter the remaining fuel in litres .. for eg ' 1 '")
// value = parseInt(remaining_fuel);
// if(value < 0.25){
//     alert("Please refill the fuel in your Car")

// }else
// {
//     alert("Ok that's nice . Go Ahead...:)")
// }

// // // CHAPTER 9 -11 TASK # 5 


// //a: it will work because condition is right
// var a = 4; 
// if (++a === 5){
    
//     alert("given condition for variable a is true"); 
// } 
  
// //b: it will not work because increment will be done after execution

// var b = 82; 
// if (b++ === 83){
//      alert("given condition for variable b is true"); } 
 

//  //c: 2 and 4 condition is truw . explained below
//      var c = 12;
//       if (c++ === 13){
//            alert("condition 1 is true"); } //conditioin in not true because it will be increment after execution
//            if (c === 13){ alert("condition 2 is true"); } //this is true because increment has been done
//             if (++c < 14){ alert("condition 3 is true"); } //this is not because it is pre increment 13 becomes 14 before execution
//              if(c === 14){ alert("condition 4 is true"); } // this is true condition 
             
//  //d: true condition because total cost is sum of labor and material cost           
//              var materialCost = 20000;
             
//              var laborCost = 2000;
//              var totalCost = materialCost + laborCost; 
//              if (totalCost === laborCost + materialCost){ 
//                  alert("The cost equals"); } 



// //e: first condition will work 0
//       if (true){ 
//           alert("True"); } 
//           if (false){
//            alert("False"); } 

// //f: condition define in string not in variable by default alert message will work .
//            if("car" < "cat"){
//                 alert("car is smaller than cat");
//              } 
      



//   //chapter 9-11 task #6
//   var subject_1 = +prompt("Enter the marks obtained in subject 1")  
//   var subject_2 = +prompt("Enter the marks obtained in subject 2") 
//   var subject_3 = +prompt("Enter the marks obtained in subject 3")
//   var total_marks = 300;
//   var obtained_marks = subject_1+subject_2+subject_3;
//   var per = (obtained_marks/total_marks)*100
  
//   document.write("<h1>Marks Sheet</h1><br><br>")

//   document.write("<br>Total marks : " + total_marks)
//   document.write("<br>Obtained Marks :" + obtained_marks)
//   document.write("<br>Percentage : " + per + " %")

//   if(per >= 80){
//       document.write("<br>Grade :A-one <br> Remarks : Excellent")
//   }
//   if(per <= 70){
//     document.write("<br>Grade :A <br> Remarks : Good")
// }
// if(per <= 60){
//     document.write("<br>Grade :B <br> Remarks : You need to improve")
// }
// if(per < 60){
//     document.write("<br>Grade :Fail <br> Remarks : Sorry")
// }


// var floor = Math.random() *10
// var floorN = math.floor(floor)
// alert(floorN)


// //chapter 9-11 task #7
   
//     var num = Math.ceil(Math.random() * 10);
//     var guess;
//     guess = prompt('Guess the number between 1 and 10 inclusive');
//     if(guess == num) {
      
//       alert('“Bingo! Correct answer”. !\nThe number was ' + num);
//     }else if(guess == num+1){
//         alert("“Close enough to the correct answer: number was "+ num)
    
//   }else{
//       alert("Sorry the number was " + num )
//   }
   
  
//   //chapter 9-11 task #8

//   var input = +prompt("Enter the number to check it is divisible by 3 or not");
//   var mod = input%3
//   if(mod==0){
//       alert("number is divisible by 3")
//   }else{
//       alert("number is not divisible by 3")
//   }

//   //chapter 9-11 task #9

//   var oddorEven = +prompt("Enter the number")
//    check = oddorEven%2
//    if(check == 0){
//        alert("The given number is EVEN")
//    }else{
//        alert("The given number is ODD")
//    }



    //chapter 9-11 task #9

//    var temp = +prompt("Enter the Temperature")

//    if(temp > 40){
//        alert("It is too hot outside.")
//      }
//       else if(temp > 30){
//     alert("The weather is Normal Today ...")
//     }
//      else if(temp > 20){
//         alert("Today's Weather is cool.")
//     }
//     else if(temp > 10){
//         alert("“OMG! Today’s weather is so Cool.")
//     }

     //chapter 9-11 task #10
    var val1=+prompt('enter your first value')
    var sign=prompt('enter your operator')
    var val2=+prompt('enter your 2nd value')


    
    if(sign === '+'){
        alert(val1 + val2)

    }else if (sign === '-'){
        alert(val1-val2)
    }else if (sign === '*'){
        alert(val1*val2)
    }else if(sign === '/'){
        alert(val1/val2)
    }else if(sign === '%'){
        alert(val1/val2*100 +'%')
    }