//Create date object

let date = new Date()
console.log(date);
//REad only day value
let day=date.getDate()
console.log(day);
let day1=date.getDay()
console.log(day1);
// Read Month data  0-11
let month=date.getMonth()+1
console.log("Month :"+month);
// Read Year value
let year=date.getFullYear()
console.log("Year :"+year);
//Display Date in this format dd-MM-yyyy
if(month<10){
    console.log(day+"-"+"0"+month+"-"+year);
}

//How Read Time Values
console.log("hour :"+date.getHours());
console.log("Minute :"+date.getMinutes());
console.log("Seconds :"+date.getSeconds());
//Display hh:mm:ss
console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
