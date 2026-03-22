import {Page,Locator,expect} from "@playwright/test";

export class Registration{

    private readonly page: Page;
    private readonly firstname: Locator;
    private readonly lastname : Locator;
    private readonly email: Locator;
    private readonly telephone: Locator;
    private readonly password : Locator;
    private readonly confirmpassword : Locator;
    private readonly privacypolicy : Locator;
    private readonly continuebutton : Locator;
    private readonly msgconfirmation : Locator;


    constructor(page:Page){
        this.page = page;
        this.firstname= page.locator('//input[@id="input-firstname"]');
        this.lastname = page.locator('//input[@id="input-lastname"]');
        this.email = page.locator('//input[@id="input-email"]');
        this.telephone = page.locator('//input[@id="input-telephone"]');
        this.password = page.locator('//input[@id="input-password"]');
        this.confirmpassword = page.locator('//input[@id="input-confirm"]');
        this.privacypolicy = page.locator('//input[@name="agree"]');
        this.continuebutton = page.locator('//input[@value="Continue"]');
        this.msgconfirmation = page.locator('div[id="content"] h1');


    }

    async setFirstName(fname:string){
        await this.firstname.fill(fname);

    }

    async setLastName(lname:string){
        await this.lastname.fill(lname);

    }

    async setEmail(email:string){
        await this.email.fill(email);
    }

    async setTelephone(tphone:string){
        await this.telephone.fill(tphone);
    }

    async setPassword(password:string){
        await this.password.fill(password);
    }

    async setConfirmPassword(password: string){
        await this.confirmpassword.fill(password);
    }

    async setPrivacyPolicy(){
        await this.privacypolicy.check();
    }

    async clickContinue(){
        await this.continuebutton.click();
    }

    async getMsgConfirmation():Promise<string | null>{
        return await this.msgconfirmation.textContent();
    }


    async completeRegistration(userdata : {
        firstname: string;
        lastname : string;
        email:string;
        telephone:string;
        password:string;
    }):Promise<void>{
        await this.setFirstName(userdata.firstname);
        await this.setLastName(userdata.lastname);
        await this.setEmail(userdata.email);
        await this.setTelephone(userdata.telephone);
        await this.setPassword(userdata.password);
        await this.setConfirmPassword(userdata.password);
        await this.setPrivacyPolicy();
        await this.clickContinue();
        await expect(this.msgconfirmation).toBeVisible();


    }

}