import {expect, test,Page} from "@playwright/test";
import {Homepage} from "../pages/Homepage";
import {TestConfig} from "../testconfig.ts";
import {Registration}from "../pages/Registration.ts";
import {RandomDataUtil} from "../utils/Randomdatagenerator.ts"
import { afterEach } from "node:test";


let homePage:Homepage;
let testConfig:TestConfig;
let registration: Registration;


test.beforeEach(async({page})=>{
    let config = new TestConfig();
   await page.goto(config.appUrl);
   homePage = new Homepage(page);
   registration = new Registration(page);

   })

test.afterEach(async({page})=>{
    await page.waitForTimeout(5000);
    await page.close();
})

test('User Registration @master @regression', async()=>{
       //Go to 'My Account' and click 'Register'

       await homePage.clickMyAccount();
       await homePage.clickRegister();
       await registration.setFirstName(RandomDataUtil.getFirstName());
       await registration.setLastName(RandomDataUtil.getLastName());
       await registration.setEmail(RandomDataUtil.getEmail());
       await registration.setTelephone(RandomDataUtil.getPhoneNumber());
       
       let password:string = RandomDataUtil.getPassword()
       await registration.setPassword(password);
       await registration.setConfirmPassword(password);
       await registration.setPrivacyPolicy();
       await registration.clickContinue();
       let confrimationmsg = await registration.getMsgConfirmation();
       expect(confrimationmsg).toBe('Your Account Has Been Created!');
       
})

