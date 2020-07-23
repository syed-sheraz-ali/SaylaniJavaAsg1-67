//TASK 1

var rightNow = new Date();

document.write(rightNow);

//TASK 2

var date = new Date();

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var m = month[date.getMonth()];

document.write("<br/> Current Month is : " + m);

//TASK 3
var date1 = new Date();
var Day = new Array();
Day[0] = "Sunday";
Day[1] = "Monday";
Day[2] = "Tuesday";
Day[3] = "Wednesday";
Day[4] = "Thursday";
Day[5] = "Friday";
Day[6] = "Saturday";

var d = Day[date1.getDay()];
document.write("<br/> Today is : " + d.slice(0, 3));

//TASK 4
var date2 = new Date();
var Day2 = new Array();
Day2[0] = "Sunday";
Day2[1] = "Monday";
Day2[2] = "Tuesday";
Day2[3] = "Wednesday";
Day2[4] = "Thursday";
Day2[5] = "Friday";
Day2[6] = "Saturday";

var d1 = Day2[date2.getDay()];
if (d1 === "Sunday" || d1 === "Saturday") {
  document.write("</br>Today is fun day ");
} else {
  document.write("</br>Today is : " + d1);
}

//TASK 5
var date3 = new Date();
var day = date3.getDate();
document.write("<br/> " + day);

if (day <= 15) {
  document.write("<br/> First fifteen days of the month ");
} else {
  document.write("<br/>Last days of the month ");
}

//TASK 6
var calculate = new Date(prompt("enter your date of birth", "dec 11 , 1920"));
var calculatemili = calculate.getTime();
var today = new Date();
var todaymili = today.getTime();
var diff = todaymili - calculatemili;
var accuage = Math.floor(diff / (24 * 30 * 12));
document.write("<br/>Current Date :" + today);

document.write(
  "<br/>Elapsed miliseconds sicnce  :" + calculate + " is : " + diff
);
document.write(
  "<br/>Elapsed miliseconds sicnce  :" + calculate + " is : " + accuage
);

//TAK 7
var time = date.getHours();
var minutes = date.getMinutes();
document.write("<br/> " + time + " : " + minutes);
if (time < 12) {
  document.write("<br/> IT's AM");
} else {
  document.write("<br/> IT's PM");
}

//TASK 8
var laterDate = new Date(2020, 11, 31, 23, 59);
document.write("<br/>Later Date : " + laterDate);

//TASK 9

var date1 = new Date();
var date2 = new Date("2020 , 04 , 25");

var Difference_In_Time = date2.getTime() - date1.getTime();

var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
Difference_In_Days = Math.ceil(Difference_In_Days);
Difference_In_Days = Difference_In_Days * -1;

document.write(
  "Total number of days between dates  <br>" +
    date1 +
    "<br> and <br>" +
    date2 +
    " is: <br> " +
    Difference_In_Days +
    " days have passed since Ramadan"
);

//TASK 10 

var refDate = new Date(2020 , 04 , 01);
var today = new Date();
var diff = today - refDate ; 

diff / 1000;

var sec = Math.round(diff);
document.write("<br/> Time elapse in seconds since " + refDate +"= : " + diff + 'seconds')



//TASK 11

var d7 = new Date();
document.write("<br/> Now time is  : " + d7)

d7.setHours(d7.getHours() - 1);
document.write("<br/> Time 1 hour before is   : " + d7)

//TASK 12

var d6 = new Date();
document.write("<br/> Today is : " + d6)
d6.setFullYear(d6.getFullYear() - 100);
document.write("<br/> Date 100 years before is : " + d6)

//TASK 13 
 var age = +prompt("Enter your age ")
 var thr = new Date();
 var thr1 = thr.getFullYear() 
 var year = thr1 - age 
 
 document.write("<br/>Your birth year is  " +year)


 //TASK 14 
 var Cname = prompt("Please enter customer name")
 var Cmonth = prompt("Please Enter the current month ")
 var unit = +prompt("Please enter your units consume")
 var charge = 16
 var Net = (unit * charge).toFixed(2)
 var late = ((Net/100) * 5).toFixed(2)
 var gross = Net + late;
 var gross1 = parseInt(gross).toFixed(2)
 document.write("<h1>KE Bill</h1>")
document.write("<h1>Customer Name : " + Cname + "</h1>" ) 
document.write(" <h3>Month : " + Cmonth + "</h3>" ) 
document.write(" <h3>NUmber of Units : " + unit + "</h3>" )
document.write(" <h3>per unit cost : Rs " + charge + "</h3>" )  
document.write(" <h3>Net Amount Payable (within Due Date ) :  Rs" + Net + "</h3>" ) 
document.write(" <h3>Late payment surcharge : Rs" + late + "</h3>" ) 
document.write(" <h3>Net Amount Payable (after Due Date ) : Rs" + gross1 + "</h3>" ) 