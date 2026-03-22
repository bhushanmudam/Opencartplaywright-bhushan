import {test,expect,Page} from "@playwright/test";
import {TestConfig} from "../testconfig.ts";
import {Homepage} from "../pages/Homepage.ts";
import {MyAccount} from "../pages/Myacoount.ts";
import{Login} from "../pages/Login.ts";
import {DP} from "../utils/DP.ts";


//Load JSON test data logindata.json
let jsonpath = 'testdata/logindata.json'
let JsonData:any = DP.getTestDataFromJson(jsonpath);

for( const data of JsonData){

     test(`Login test with Json data ${data.testName}`, async({page})=>{
        const config = new TestConfig();
        await page.goto(config.appUrl);
        const homepage = new Homepage(page);
        await homepage.clickMyAccount();
        await homepage.clickLogin();
        const login = new Login(page);
        // login.setEmail(data.email);
        // login.setPassword(data.password);
        // login.clickOnLogin();
        login.Login(data.email,data.password)
        if(data.expected.toLowerCase()==='success'){
            const myaccount  = new MyAccount(page);
           await  expect(myaccount.isMyAccountPageExist).toBeTruthy();
        }else{
            const errormsg = await login.getLoginError();
            expect(errormsg).toContain('Warning: No match');
        }
     })
}

let csvpath = 'testdata/logindata.csv';
let csvdata:any = DP.getTestDataFromCsv(csvpath);



for( const data of csvdata){

     test(`Login test with csv data ${data.testName}`, async({page})=>{
        const config = new TestConfig();
        await page.goto(config.appUrl);
        const homepage = new Homepage(page);
        await homepage.clickMyAccount();
        await homepage.clickLogin();
        const login = new Login(page);
        // login.setEmail(data.email);
        // login.setPassword(data.password);
        // login.clickOnLogin();
        login.Login(data.email,data.password)
        if(data.expected.toLowerCase()==='success'){
            const myaccount  = new MyAccount(page);
           await  expect(myaccount.isMyAccountPageExist).toBeTruthy();
        }else{
            const errormsg = await login.getLoginError();
            expect(errormsg).toContain('Warning: No match');
        }
     })
}