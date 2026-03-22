import {Page,Locator} from "@playwright/test";

export class Homepage{

    private readonly page : Page;
    private readonly lnkMyAccount : Locator;
    private readonly lnkRegister : Locator;
    private readonly lnkLogin : Locator;
    private readonly searchInput : Locator;
    private readonly searchButton : Locator;

    constructor(page:Page){

        this.page = page;
        this.lnkMyAccount = page.locator('a[title="My Account"]');
        this.lnkRegister = page.locator('a[href="http://localhost/opencart/upload/index.php?route=account/register"]');
        this.lnkLogin = page.locator('a[href="http://localhost/opencart/upload/index.php?route=account/login"]');
        this.searchInput = page.locator('input[placeholder="Search"]');
        this.searchButton = page.locator('button[class="btn btn-default btn-lg"]');
    }

    async isHomePageExist():Promise<boolean>{
        let title = await this.page.title();
        if(title){
            return true
        }else{
            return false
        }
    }

    async clickMyAccount(){
        try{
        await this.lnkMyAccount.click();
        }catch(error){
            console.log(`Exception occured while clicking 'My account':${error}`);
            throw error;
        }
    }


    async clickRegister(){
        try{
         await  this.lnkRegister.click();
        }catch(error){
            console.log(`Exception occured while clicking 'Register':${error}`);
            throw error;
        }
    }

    async clickLogin(){
        try{
            await this.lnkLogin.click();
        }catch(error){
             console.log(`Exception occured while clicking 'Login':${error}`);
            throw error;
        }
    }

    async enterProductName(pname:string){
        await this.page.waitForTimeout(3000);
        try{
          await  this.searchInput.fill(pname);
        }catch(error){
            console.log(`Exception occured while entering a product:${error}`);
            throw error;
        }

    }

    async clickSearch(){
        try{
            await this.searchButton.click();
        }catch(error){
             console.log(`Exception occured while searching:${error}`);
            throw error;
        }
    }





}

