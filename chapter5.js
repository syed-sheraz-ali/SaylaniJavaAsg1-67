
// chapter 5 : taks 1

var a = 3;
var b = 5;
var sum = a+b;

document.write("Sum of 3 and 5 is " + sum + " <br>");

// chapter 5 : taks 2


var a = 3;
var b = 5;
var sub = a-b;

document.write("Subtraction of 3 and 5 is " + sub + " <br>");


var a = 3;
var b = 5;
var mul = a*b;

document.write("Multiplication of 3 and 5 is " + mul + " <br>");


var a = 15;
var b = 5;
var div = a/b;

document.write("Subtraction of 15 and 5 is " + div + " <br>");


var a = 3;
var b = 5;
var mud = a%b;

document.write("Modulus  of 3 and 5 is " + mud + " <br>");



// chapter 5 : taks 3 : a 


var number = 7

// chapter 5 : taks 3 : b

document.write("value after variable declaratio is " + ++number );

// chapter 5 : taks 3 :c
 var three = 3

 // chapter 5 : taks 3 :d
  document.write(" <br/> Initial value is : " + three + " .")

  // chapter 5 : taks 3 :e
  three = ++three

  // chapter 5 : taks 3 :f
document.write("<br/> Value after Increament : "+ three)

 // chapter 5 : taks 3 :g
 three = three + 7

  // chapter 5 : taks 3 :h
  document.write("<br/> value after addition is " + three)

   // chapter 5 : taks 3 :i

   three = --three

    // chapter 5 : taks 3 :j

    document.write("<br/> Value afrer decrement is " + three)

     // chapter 5 : taks 3 :k
     document.write("<br/> variable value is now  "+ three)

     var remainder = three%3
     document.write("<br/> the remainder after dividing the variable’s value by 3 = " + remainder)

     // chapter 5 : taks 3 :l

     document.write("<br/> The remainder is : " + remainder)

     
      // chapter 5 : taks 4

      document.write("<br/> <br/> <br/>******* Movie ticket *****")

       
     var cost = 600;
     var total = cost*5;


     document.write("<br> Total cost to buy 5 tickets to a Movie is :" +  total + "PKR <br> <br>");




      // chapter 5 : taks 5
     document.write("<br> <br> *****Table*****" + "<br> <br>")

      for(i = 1;  i <= 10; i++){
        document.write("4 * " + i + "  =  " + 4*i + "<br>");

    }


    //chapter 5 : task : 6
    document.write("<br> <br> ****temperature conversion **** <br>" + "<br> <br>");


    var input = 70;
    var Celsius =  (input - 32)*(5/9);
    
   
    document.write("<h4> 70 *F in  celcius = " + Celsius + " *C  <br>  <br > </h4>")


    
     //******Celsius Tamperature **********//


     var int = 25;
     var fahrenhite = (int * 1.8)+32;
     

     document.write("<h4>25 *C in Farenhite =   " + fahrenhite + " *F <br ></h4>");


     //chapter 5 : task : 7


     document.write("<br> <br> <h1>Shopping Cart</h1> <br>" + "<br> ");


      var item1 = 650;
      var item2 = 100;

      var quantity_item1 = 3*item1;

      var quantity_item2 = 7*item2;

      var shipping_charges = 100;

      var tatal = quantity_item1 + quantity_item2 + shipping_charges;



      document.write("Price of item 1 is " + item1 + "<br> <br>");

      document.write("Quantity of item 1 is 3 <br> <br>");

      document.write("Price of item 2 is " + item2 + "<br> <br>");

      document.write("Quantity of item 2 is 7 <br> <br>");

      document.write(" Shipping Charges :" + shipping_charges + "<br>");



      document.write(" <br/>Total cost of your Order :" + tatal + "<br> <br>");




      //chapter 5 : task : 8

      document.write("<br> <br> <h1>Mark Sheet </h1> <br>" + "<br> <br>");

      var math      =  70;
      var physics   =  75;
      var computer  =  65;
      var chemistry =  70;
      var biology   =  50;

      var obtained = math + physics + computer + chemistry + biology;
      var total_marks = 800;
      var hundred = 100;
      //  var division = tal/tat_marks;
      var per = (obtained/total_marks)*hundred ;


      document.write("Total Marks : " + total_marks + "<br>");

      document.write("Marks Obtained : " + obtained+ "<br>" );

      document.write("percentage: " + per + "  % <br> <br>"  );


      // /chapter 5 : task : 9

      document.write("<br> <br> <h1>Currency Exchange</h1> <br>" + "<br> <br>");

      var UsDollar = 164.85;
      var Riyal    = 43.94;

      var pkrintoRiyal = Riyal*25;
      var pkrintoUS     = UsDollar*10;

      var sub = pkrintoRiyal + pkrintoUS;

      document.write("<br>US dollar becomes "  + pkrintoUS + " rupees")
      document.write("<br>Riyal becomes " + pkrintoRiyal + " rupees")

      document.write("<br>Total Currency in PKR =" + sub + "<br> <br> <br>");



      // / /chapter 5 : task : 10


      var number = 10;
    
      var Add= number + 5;

      var Multi = number * 10;

      var  Div = number/5;


     document.write("Number initialize = " + number + " .<br>" + "Add by 5 = " + Add + " <br>  Multiply by 10 = " + Multi +  " <br> Divide by 5 = " + Div + " <br> <br>") ;

     

     
      // / /chapter 5 : task : 11

     document.write("<br> <br> <h1>Age Calculator </h1><br>" + "<br> <br>");



    var current_year = 2020;
    var birth_year = 1998;

    var age = current_year - birth_year;

    document.write("Current year is :" + current_year + "<br> Birth years is " + birth_year + "<br> Your Age is " + age + "<br> <br>");



     // / /chapter 5 : task : 12


    document.write("<br> <br> <h1> The Geometrizer </h1> <br>" + "<br> <br>");

     var radius_of_circle = 20;
     var pi  = 3.143;
     var numeric = 2;
 
     var CircumferenceOfCircle = numeric*pi*radius_of_circle;
     var area_of_circle = pi*radius_of_circle**numeric;

      document.write("Radius of Circle : " + radius_of_circle +  "<br>  The circumference is : " + CircumferenceOfCircle +
                 "<br> The area of Circle : " + area_of_circle + "<br> <br> <br>");



                    // / /chapter 5 : task : 13

    document.write("<br> <br> <h1>Life Cycle </h1> <br>" + "<br> <br>");


      var favourite_snacks = "Lays";

      var CurrentAge = 21;

      var MaximumAge = 65;

      var perDay = 3;


      var required = ((MaximumAge-CurrentAge)*365)*perDay

      document.write("favorite snacks : " + favourite_snacks + " <br> Your current age : " + CurrentAge + "<br> Maximum age : "
      + MaximumAge + " <br> You will need " + required+ " Lays to last your until the ripe old age 65.");
