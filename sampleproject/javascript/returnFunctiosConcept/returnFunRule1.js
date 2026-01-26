/*
    if a function is returning a value, the return value of a function , we can use
    as parameter to another function
*/
 
function add1(x,y){
    return (x + y)
}
 
function sub1(x, y){
    let result=(x - y)
    return result
}
 
function multiplication(a, b){
    let res= (a * b)
    console.log("Multiplication Result :"+res);
   
}
 
let v1=add1(10,5)
let v2=sub1(25,15)
multiplication(v1,v2)
console.log("--------------------");
 
multiplication(add1(5,4), sub1(40,30))