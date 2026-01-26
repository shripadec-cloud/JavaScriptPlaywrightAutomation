/*
    if a function is returning a value, the return value of a function , we can use
    in teh body of another function
*/
 
function add1(x,y){
    return (x + y)
}
 
function sub1(x, y){
    let result=(x - y)
    return result
}
 
function multiplication(){
    a=add1(20,5)
    b=sub1(12,7)
    let res= (a * b)
    console.log("Multiplication Result :"+res);
   
}
 
multiplication()