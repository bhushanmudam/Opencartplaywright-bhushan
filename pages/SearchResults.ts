import {Locator,Page} from "@playwright/test";
import {TestConfig} from "../testconfig.ts"

export class SearchResults{
private readonly page: Page;
private readonly searchbox:Locator;
private readonly searchbutton : Locator;
private readonly searchproducts : Locator;



constructor(page:Page){
    this.page = page;
    this.searchbox = page.locator('input[placeholder="Search"]');
    this.searchbutton = page.locator('.fa.fa-search');
    this.searchproducts = page.locator('h4>a');
    }


    // async searchTheProduct(productname:string){
    //     await this.searchbox.fill(productname);
    //     await this.searchbutton.click();
    // }

    async isProductExist(productname:string){
       const count = await this.searchproducts.count();
       for(let i =0; i<count;i++){
            const product = this.searchproducts.nth(i);
            const title = await product.textContent();
            if(title===productname){
                return true;
            }else{
                return false;
            }

       }
    }

    async selectProduct(productname:string){
        const count = await this.searchproducts.count();
       for(let i =0; i<count;i++){
            const product = this.searchproducts.nth(i);
            const title = await product.textContent();
            if(title===productname){
                product.click();
            }

       }
    }





    



    



}   