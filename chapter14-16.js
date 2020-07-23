// Task 1 and 2
//initialize empty array
var StudentName = [];
document.write(StudentName)
//task 3
var StringArray = ["Syed " , "Sheraz " , "Ali"];
document.write(StringArray)
//task 4

var numArray = [14 , 11 , 1995];
document.write(numArray)
//task 5
 
var booleanArray = [true , false ];
document.write(booleanArray)

//task 6
var MixedArray = ["Syed" , "Sheraz " , "Ali " , 14 , 11 , 1995]
document.write(MixedArray)


//task 7 

var Qualification = ["Qualification " , "SSC" , "HSC" , "BCS"
, "BS" , "BCOM" , "MS" , "M.Phill" ]  

document.write("<h1>"  + Qualification[0] + " </h1><br><br>")


document.write(" <h2>1) "  + Qualification[1] + " </h2>")
document.write(" <h2>2) "  + Qualification[2] + " </h2>")
document.write(" <h2>3) "  + Qualification[3] + " </h2>")
document.write(" <h2>4) "  + Qualification[4] + " </h2>")
document.write(" <h2>5) "  + Qualification[5] + " </h2>")
document.write(" <h2>6) "  + Qualification[6] + " </h2>")
document.write(" <h2>7) "  + Qualification[7] + " </h2>")


//Task 8
var stdName = ["Syed" , "Sheraz " , "Ali"]
var marks =   [ 370 , 380 , 390]
var total_marks = 500;

document.write("<br/> <h3>Score of " + stdName[0] + " is " + marks[0] + ". Percentage :" + (marks[0]/total_marks)*100+ " %<h3/>")
document.write("<h3>Score of " + stdName[1] + " is " + marks[1] + ". Percentage :" + (marks[1]/total_marks)*100+ " %<h3/>")
document.write(" <h3>Score of " + stdName[2] + " is " + marks[2] + ". Percentage :" + (marks[2]/total_marks)*100+ " %<h3/>")


//Task 9 : a
var color_names = ["  Orange " , "Yellow " , "Blue " , "Red " , "Pink "]
document.write(color_names)

//Task 9 : b
var input = prompt("Enter the color you want to add in begining of Array")

color_names.unshift(input)
document.write("<br> "+ color_names);

var input1 = prompt("Enter the color you want to add at the end of  an Array")
color_names.push(input1)
document.write("<br> "+ color_names);

//Task 9 : c
color_names.unshift( " black"  ," brown ")
document.write("<br/> "+ color_names)
//Task 9 : d
color_names.shift([0]);
document.write("<br/> "+ color_names)
//Task 9 : e

color_names.pop();
document.write("<br/> "+ color_names)

//Task 9 : f
var input2 = +prompt("At which index you want to add color ")
var input3 = prompt("Now write a color name you want to add")

color_names.splice(input2 , 0 , input3)
document.write("<br/> " + color_names)

//Task 9 : g

var input4 = +prompt("Now write a index from where you want to delete color")
var input5 = +prompt("How many color you want to delete from defined index number")

color_names.splice(input4 , input5)
document.write("<br/> " + color_names)


//Task 10 

var studentsScore = [320 , 230 , 480 , 120];
document.write("<br/> Before Sorting" +studentsScore)
studentsScore.sort();
document.write("<br/> After Sorting" +studentsScore)

// //Task 11
var  Cities = ["Karachi " , "Lahore " , "Islambad " , "Quetta " , "Peshawar"]
document.write("<br/>Cities list "+Cities)

var SelectedCities = Cities.slice(2,4)
document.write("<br/> Selected Cities =" +SelectedCities)

//Task 12

var arr1 = ["This " , "Is " , "My " , "Cat"]
document.write("<h1>Array :</h1>")
document.write(arr1)

var x = arr1.join(" ");
document.write("<h1> String :</h1> " + x)

//Task 13
var focus0 = []
focus0[0] = "cat"
focus0[1] = "dog"
focus0[2] = "loin"
focus0[3] = "Tiger"

document.write("<h1>Animals <br/></h1>"+focus0)

//task 14
var focus1 = []
focus1[0] = "cat"
focus1[1] = "dog"
focus1[2] = "loin"
focus1[3] = "Tiger"
focus1.reverse()

document.write("<h1>Animals <br/></h1>"+focus1)

//task 15

var manufacturer = ["Apple " , "Samsung " , "Motorolla " , " Nokia " ,
"Sony" ," Haier" ,"Infinix" , "Qmobile "  ]
document.write("<h1><br/>Manufacturers List</h1>")
document.write( "  <h3> 1 )" + manufacturer[0] + "</h1>")
document.write( "  <h3> 2 )" + manufacturer[1] + "</h1>")
document.write( "  <h3> 3 )" + manufacturer[2] + "</h1>")
document.write( "  <h3> 4 )" + manufacturer[3] + "</h1>")
document.write( "  <h3> 5 )" + manufacturer[4] + "</h1>")
document.write( "  <h3> 6 )" + manufacturer[5] + "</h1>")
document.write( "  <h3> 7 )" + manufacturer[6] + "</h1>")
document.write( "  <h3> 8 )" + manufacturer[7] + "</h1>")
