const {test, expect} = require('@playwright/test')
const { SourceTextModule } = require('node:vm')
 
test('First Test @sanity', async()=>{
    console.log("Sanity First Test case Execution!!");
   
})
 
test('Second Test @sanity', async()=>{
    console.log("Sanity Second Test case Execution!!");
   
})
 
test('Third Test @regression', async()=>{
    console.log("Regression Third Test case Execution!!");
   
})
 
test('Fourth Test @regression', async()=>{
    console.log("Regression Fourth Test case Execution!!");
   
})
 
test('Fifth Test @sanity@regression', async()=>{
    console.log("Fifth Test case Execution!!");
   
})
 
 
test('Sixth Test @sanity@regression', async()=>{
    console.log("Sixth Test case Execution!!");
   
})


/*Applying Tags in Tests :
----------------------------------------
Case 1: Execute only @sanity tag testcases
npx playwright test ./tests/tagstest1.spec.js --grep sanity
 
Case 2: Execute only @refression tag testcases
npx playwright test ./tests/tagstest1.spec.js --grep regression
 
case 3: Execute tests having multiple tags
npx playwright test ./tests/tagstest1.spec.js --grep  '@sanity@regression'
 
case 4: Execute sanity testcases which are not available in sanity with regression
npx playwright test ./tests/tagstest1.spec.js --grep '@sanity' --grep-invert '@sanity@regression'*/