

cars = ["Toyota","hhgs"]
// var text ='';

// for (var i = 0; i < cars.length; i++) {
//   text += cars[i] + " <br> ";
// }


// items.map(function(value){
// return value*2
// })



// a.toString("dd")
// "1,2,4"
// a.toString()
// "1,2,4"
// ["anies","dan"].join(" and ")+"likes your comments"
// "anies and danlikes your comments"
// ["anies","dan"].join(" and ")+" likes your comments"
// "anies and dan likes your comments"


var user = [
{
    name:"daniel",
    age:22
},
{
    name:"akan",
    age:10
}
]


user.sort(function(a,b){
    if(a.name>b.name){
        return -1
    }
    if(a.name<b.name){
        return 1
    }

    return 0
})




// const greet = name => time=>{
//     console.log("good "+time+" "+name)
// }

// global
var Name = "anies"




function Greet(){
    //     locale
//     var Name = "anies"
    console.log(Name)

    /*
    all javascript code can go inside a function
    */
    

}


// function A(){
//     var nameA = "a"

//     function B(){
//         nameB = "b"

//         function C(){
//             nameC ="c"

//         }
//     }
// }


// f(x) = x*22


// function with no return or no parameter(s)
function Greet1(){
  console.log("good morning",3+55)
  console.log(" how are you")

}






// function with no return or parameter(s)
function Greet2(name,age){

  console.log("good morning "+name)
  console.log(" how are you")

}


// function with return or parameter(s)
function getDate(){

  return Date()


  /*
    this will still work
    var currentDate = Date()
    return currentDate
  */
  

}
/*
the return value of the function can be save into a variable
var currentDate = getDate()
*/



// function with  return or no parameter(s)

function Add(a,b){
let result=a+b
return result

}


// y(x) = x+3

function y(x){
    return x+3
}

// f(x,y) = 3x + 10y + 30


// create a function that with popup 'good morning <name>'