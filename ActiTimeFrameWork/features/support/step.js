const {test,expect,chromium} = require('@playwright/test')
const {Given, When, Then, setDefaultTimeout} = require('@cucumber/cucumber')
setDefaultTimeout(6000)
const assert = require('assert')

Given("I Launch the Browser", async() =>{
    const browser = await chromium.launch({
        headless:false
    })
    const context = await browser.newContext()
    this.page = await context.newPage()
})

When("I Navigate to the URL",async() =>{

    await this.page.goto("http://localhost/login.do")
})

Then("I SHould see the Login Page",async() =>{
   await expect(this.page).toHaveTitle("actiTIME - Login")
  
})

When ("I Enter the valid username",async() =>{
    await this.page.locator("//input[@id='username']").fill('admin')
})

When ("I Enter the valid password",async() =>{
    await this.page.locator("//input[@name='pwd']").fill('manager')
})

When ("I Click on Login Button",async() =>{
    await this.page.locator("//div[text()='Login ']").click()
})

Then ("I Should land on HomePage",async() =>{
await expect(this.page).toHaveTitle("actiTIME -  Enter Time-Track")

})

When ("I Click on Logout Link",async() =>{
    await this.page.locator("//a[@id='logoutLink']").click()
})

Then ("I Should see Login Page",async() =>{
await expect(this.page).toHaveURL("http://localhost/login.do")
})

Given ("I Click on User Tab",async() =>{
    await this.page.locator("//div[text()='Getting Started Shortcuts']").click()
    await this.page.locator("//div[text()='USERS']").click()
})

When ("I Click on Add User",async() =>{
    await this.page.locator("//div[text()='Add User']").click()
})

When ("I Enter the User Details",async() =>{

    await this.page.locator("//input[@name='firstName']").fill('TEST_CUCUMBER')
    await this.page.locator("//input[@name='lastName']").fill('FRAMEWORK')
    await this.page.locator("//input[@name='email']").fill('testaccount@gmail.com')
    await this.page.locator("//input[@name='username']").fill('TEST')
    await this.page.locator("//input[@name='password']").fill('Test@123')
    await this.page.locator("//input[@name='passwordCopy']").fill('Test@123')
})

Then ("I Should Create User",async() =>{
    await this.page.locator("//span[text()='Create User']").click()
})


