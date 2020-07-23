//TASK 1  


//Gettimg element of id “main-content” and assigning them in a variable.


//  var content = document.childNodes[1].childNodes[2].childNodes[1].childNodes[5]
//  console.log(content)


 //TASK 2 : Displaying all child elements of main content

//  var c = document.body.children[0].children[2]
//  console.log(c)

 //TASK 3 : Getting elements of class render and showing thier inner html


// var c = document.body.children[0].children[2]
// var x = c.getElementsByTagName("p")
// // var content = x[0].innerHTML;
// // console.log(content)

// for (var i = 0; i < x.length ; i++) {
//     var content = x[i].innerHTML;
//      document.write(content)
// }

//TASK 4 and 5 :  Filling input values using javascript

// var val = document.getElementsByTagName("input")[0].setAttribute("value" , "Syed Sheraz")

// var val1 = document.getElementsByTagName("input")[1].setAttribute("value" , "Ali")
// var val1 = document.getElementsByTagName("input")[2].setAttribute("value" , "syedsherazali14gmail.com")


//****************************************************************// */
// Question # 2

// Question 2 Task # 1 : Nodetype of element havinf id form-content

// var type =   document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].nodeType
// console.log(type)

// //TASK #2 
// var type =   document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[3].nodeType
// console.log(type)


//TASK 3 : Update child node of element having id “lastName”.

// var newNode = document.createTextNode("information")
// var x = document.body.children[0].children[2].children[1]
// x.replaceChild(newNode, x.childNodes[0])
// console.log(x)


//TASK 4 : Get First and last child of id “main-content”

// var main = document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].firstChild
// var main1 = document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].lastChild

// console.log(main1)

// TASK 5 a  : Next sibling of elemet having ID = LastName
//  var x = document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[1].nextSibling
//  console.log(x)
// // TASK 5 b : Previous sibling of elemet having ID = LastName
// var y = document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[1].previousSibling

// console.log(y)


 //TASK 6 : Getting Parent Node 


//  var x = document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].lastChild.parentNode.nodeName

//  var s = document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].lastChild.nodeType

//  console.log(s)
