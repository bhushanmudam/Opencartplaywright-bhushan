import {test,expect,Page} from "@playwright/test";
import {TestConfig} from "../testconfig.ts";
import {Homepage} from "../pages/Homepage.ts";
import {MyAccount} from "../pages/Myacoount.ts";
import{Login} from "../pages/Login.ts"
import { userInfo } from "node:os";

let config: TestConfig;
let homePage : Homepage;
let loginPage: Login;
let myAccountPage : MyAccount;

// This hook runs before each test
test.beforeEach(async({page})=>{
config = new TestConfig();// Load config (URL, credentials)
await page.goto(config.appUrl);// Navigate to base URL


  // Initialize page objects
homePage = new Homepage(page);
loginPage = new Login(page);
myAccountPage = new MyAccount(page);

});


// Optional cleanup after each test
test.afterEach(async({page})=>{
    await page.close(); // Close browser tab
});

test('User login test @master @sanity @regression',async()=>{
     //Navigate to Login page via Home page

     await homePage.clickMyAccount();
     await homePage.clickLogin();

     //Enter valid credentials and log in
    
    await loginPage.Login(config.email,config.password);

    
    //Verify successful login by checking 'My Account' page presence
    let headingtext= await myAccountPage.checkMyAccountsScreen();
    expect(headingtext).toBe('My Account')

})