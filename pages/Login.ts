import {Locator,Page,expect} from '@playwright/test';

export class Login{

    private readonly page:Page;
    private readonly enterEmail : Locator;
    private readonly enterPassword : Locator;
    private readonly loginButton :Locator;
    private readonly loginErrorMsg : Locator;


    constructor(page:Page){
        this.page = page;
        this.enterEmail= page.locator('#input-email');
        this.enterPassword = page.locator('#input-password');
        this.loginButton = page.locator('input[value="Login"]')
        this.loginErrorMsg = page.locator('.alert.alert-danger.alert-dismissible');

        
    }

    async setEmail(email:string){
        await this.page.waitForLoadState('networkidle');
        await expect(this.enterEmail).toBeVisible();
        await this.enterEmail.fill(email);
    }

    async setPassword(password:string){
        await this.enterPassword.fill(password);
    }

    async clickOnLogin(){
        await this.loginButton.click();
    }

    async Login(email:string, password:string){
        await this.setEmail(email);
        await this.setPassword(password);
        await this.clickOnLogin();
    }

    async getLoginError():Promise<string|null>{
        return await this.loginErrorMsg.textContent();
    }
}