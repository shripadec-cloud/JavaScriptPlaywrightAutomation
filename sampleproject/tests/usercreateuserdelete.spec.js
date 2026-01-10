const { test, expect } = require('@playwright/test');
const { clear } = require('node:console');
let page;
test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext()
    page = await context.newPage()
    await page.goto("http://localhost/login.do")
    await page.waitForTimeout(3000)
})

test.describe.serial('Create User Scenario', () => {
    test('Login into Application', async () => {

        await page.locator('input[name="username"]').fill("admin")
        await page.locator('[name="pwd"]').fill("manager")
        await page.locator("//div[text()='Login ']").click()
        await page.waitForTimeout(3000)
    })

    test('Minimize Flyout window', async () => {
        await page.locator("#gettingStartedShortcutsPanelId").click()
        await page.waitForTimeout(3000)
    })

    test('Create User', async () => {
        await page.locator("//*[@id='topnav']/tbody/tr[1]/td[5]/a/div[2]").click()
        await page.waitForTimeout(2000)
        await page.locator("//div[text()='Add User']").click()
        await page.waitForTimeout(2000)
        await page.locator("#userDataLightBox_firstNameField").fill("demo")
        await page.locator("#userDataLightBox_lastNameField").fill("User1")
        await page.locator("#userDataLightBox_emailField").fill("demo@gmail.com")
        await page.locator("#userDataLightBox_usernameField").fill("demoUser1")
        await page.locator("#userDataLightBox_passwordField").fill("Welcome@123")
        await page.locator("#userDataLightBox_passwordCopyField").fill("Welcome@123")
        await page.waitForTimeout(2000)
        await page.locator("//span[text()='Create User']").click()
        await page.waitForTimeout(2000)

    })

    test('Delete Existing User', async () => {
        await page.locator("(//span[text()='User1, demo'])[1]").click()
        await page.waitForTimeout(2000)
        page.on('dialog', async (alertWindow) => {
            const message = await alertWindow.message()
            console.log("Alert Message :" + message);
            await alertWindow.accept()

        })

        await page.locator("#userDataLightBox_deleteBtn").click()
        await page.waitForTimeout(2000)
    })

    // test('Logout From Application', async()=>{
    //     await page.locator("#logoutLink").click()
    //     await page.waitForTimeout(2000)
    // })
})

test.describe('Create User Scenario 2', () => {

    test('Create a user', async () => {
        await page.locator("//*[@id='topnav']/tbody/tr[1]/td[5]/a/div[2]").click()
        await page.waitForTimeout(2000)
        await page.locator("//div[text()='Add User']").click()
        await page.waitForTimeout(2000)
        await page.locator("#userDataLightBox_firstNameField").fill("demo")
        await page.locator("#userDataLightBox_lastNameField").fill("User1")
        await page.locator("#userDataLightBox_emailField").fill("demo@gmail.com")
        await page.locator("#userDataLightBox_usernameField").fill("demoUser1")
        await page.locator("#userDataLightBox_passwordField").fill("Welcome@123")
        await page.locator("#userDataLightBox_passwordCopyField").fill("Welcome@123")
        await page.waitForTimeout(2000)
        await page.locator("//span[text()='Create User']").click()
        await page.waitForTimeout(2000)
    })

    test('Modify created user', async () => {
        await page.waitForTimeout(2000)
        await page.locator("//span[@class='userNameSpan'][normalize-space()='User1, demo']").click()
        await page.locator("#userDataLightBox_firstNameField").fill("TestUser")
        await page.locator("#userDataLightBox_lastNameField").fill("Testing")
        await page.locator("#userDataLightBox_emailField").fill("Test@gmail.com")
        await page.locator("#userDataLightBox_usernameField").fill("Testuser1")
        await page.locator("#userDataLightBox_passwordField").fill("Test@123")
        await page.locator("#userDataLightBox_passwordCopyField").fill("Test@123")
        await page.waitForTimeout(2000)
        await page.locator('span').filter({ hasText: 'Save Changes' }).first().click()
        await page.waitForTimeout(2000)

    })

    // test('Logout From Application', async()=>{
    //     await page.locator("#logoutLink").click()
    //     await page.waitForTimeout(2000)
    // })
})

test.describe('Add New Customer', () => {

    test('Adding new customer', async () => {

        await page.locator("//a[@class='content tasks']").click()
        await page.waitForTimeout(2000)
        await page.locator("//div[@class='addNewContainer']//div[@class='downIcon']").click()
        await page.waitForTimeout(2000)
        await page.locator(':text-is("+ New Customer")').click()
        await page.waitForTimeout(2000)
        await page.locator("//input[@id='customerLightBox_nameField']").fill("TestNewCustomer")
        await page.locator("//span[normalize-space()='Create Customer']").click()

    })

    test('Delete Customer', async () => {

        await page.locator('div.editButton.available:visible').click()
        await page.waitForTimeout(2000)
        await page.locator('div.action:visible').click()
        await page.waitForTimeout(2000)
        await page.locator("div[class='edit_customer_sliding_panel sliding_panel'] div[class='deleteButton'] div[class='title']").click()
        await page.waitForTimeout(2000)
        await page.locator("//span[@id='customerPanel_deleteConfirm_submitTitle']").click()
        await page.waitForTimeout(2000)

    })


})

test.describe("Modify the Customer", () => {

    test('Create the Customer', async () => {

        await page.locator("//div[@class='addNewContainer']//div[@class='downIcon']").click()
        await page.waitForTimeout(2000)
        await page.locator(':text-is("+ New Customer")').click()
        await page.waitForTimeout(2000)
        await page.locator("//input[@id='customerLightBox_nameField']").fill("TestNewCustomer")
        await page.locator("//span[normalize-space()='Create Customer']").click()


    })

    test('Modify the customer', async () => {

        await page.locator("//div[@class='editButton available']").click()
        await page.waitForTimeout(2000)
        await page.locator("//div[@class='nameLabel'][normalize-space()='TestNewCustomer']").click()
        await page.waitForTimeout(2000)
        await page.locator("//div[@class='nameInput']//input[@placeholder='Enter Customer Name']").fill('EditedCustomer')
        await page.waitForTimeout(2000)
        await page.locator('body').click();
    })

    test("Delete Modified Customer", async () => {

        //await page.locator("//div[@class='editButton available']").click()
        await page.locator(".editButton.available").click()
        await page.waitForTimeout(2000)
        


    })


})
