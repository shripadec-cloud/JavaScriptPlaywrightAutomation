const {test, expect} = require('@playwright/test')
 
test("This is a First Test", function display(){
     console.log("It is a First Playwright test case"); //traditional function
     
})

test ("This is second test here :", function(){
     console.log("This is a Ananomous Function");
})

test ("This is third test:",()=>{
     console.log("This is arrow fucntion:")
})