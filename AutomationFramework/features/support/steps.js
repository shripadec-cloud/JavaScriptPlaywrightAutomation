const {Given, When, Then, setDefaultTimeout} = require('@cucumber/cucumber')
setDefaultTimeout(6000)
const {test, expect, chromium} = require('@playwright/test')
const assert = require('assert')

Given("I launch browser", async() =>{
    const browser=await chromium.launch({
        headless:false
    })
    const context = await browser.newContext()
    this.page = await context.newPage()
})
 
When("I navigate the Application URL", async() =>{
    await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
 
})
 
Then("I find the Login Page", async() =>{
    await expect(this.page).toHaveTitle("OrangeHRM")
})
 
Then("I close Application", async() =>{
    await this.page.close()
})
 
When("I enter username in username text field", async() =>{
    await this.page.locator('[name="username"]').fill("Admin")
})
 
When("I enter password in password text field", async() =>{
    await this.page.locator('[name="password"]').fill("admin123")
})
 
When("I click on Login button",async() =>{
    await this.page.locator("//button[normalize-space()='Login']").click()
})
 
Then("I find the home Page", async()=>{
    await expect(this.page).toHaveTitle("OrangeHRM")
})
 
When("I clcik on User Profile Icon", async() =>{
    await this.page.locator("//img[@class='oxd-userdropdown-img']").click()
})
 
When("I click on Logout Link", async()=>{
    await this.page.locator('a:has-text("Logout")').click()
})