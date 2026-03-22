import {Page,Locator} from "@playwright/test";

export class Logout{
    private readonly page : Page;
    private readonly logout:Locator;
    private readonly continue : Locator;

    constructor(page:Page){
        this.page = page;
        this.logout= page.locator('a:nth-child(13)');
        this.continue = page.locator('.btn.btn-primary');
        
    }

    async clickOnLogout(){
        await this.logout.click();
    }

    async clickOnContinue(){
        await this.continue.click();
    }

    
    


}