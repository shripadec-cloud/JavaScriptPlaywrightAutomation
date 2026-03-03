const {test, expect}=require('@playwright/test')
const {CreateUser}=require('./../ActiTime/CreateUser')

test("Login and Create User", async ({page})=>{
    await page.goto("http://localhost/login.do")
    await page.waitForTimeout(3000)

    //create a object for Create User
    let Ocreateuser = new CreateUser(page)

    await Ocreateuser.EnterUserName("admin")
    await Ocreateuser.EnterPassword("manager")
    await Ocreateuser.ClickLoginBtn()
    await page.waitForTimeout(3000)
    await Ocreateuser.ClickUserTab()
    await page.waitForTimeout(3000)
    await Ocreateuser.ClickAddUser()
    await page.waitForTimeout(3000)
    await Ocreateuser.EnterFirstName("TestPOM")
    await Ocreateuser.EnterLastName("Automation")
    await Ocreateuser.EnterEmail("test@yahoo.com")
    await Ocreateuser.EnterUserName1("Test1")
    await Ocreateuser.EnterPassword1("Test@123")
    await Ocreateuser.ReEnterPassword("Test@123")
    await page.waitForTimeout(4000)
    await Ocreateuser.ClickCreateUserbtn()


})