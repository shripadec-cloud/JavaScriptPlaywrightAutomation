const {test, expect} = require('@playwright/test')
 
test("This is a First Test", async function display(){
    await console.log("It is a First Playwright test case");
     
})

test ("This is second test here :", async function(){
     await console.log("This is a Ananomous Function");
})

test ("This is third test:",async ()=>{
    await console.log("This is arrow fucntion:")
})