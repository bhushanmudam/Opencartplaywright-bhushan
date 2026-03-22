import{Locator,Page} from "@playwright/test"

export class MyAccount{

    private readonly page:Page;
    private readonly header : Locator;

    constructor(page:Page){

        this.page= page;
        this.header= page.locator('h2:has-text("My Account")');

    }

    async isMyAccountPageExist(){
        return this.header.isVisible();
    }

    async checkMyAccountsScreen():Promise<string>{

        let myAccountheading: any= await this.header.textContent();
        return myAccountheading;

    }

}