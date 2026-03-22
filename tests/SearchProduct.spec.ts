import {test,expect,Page} from "@playwright/test";
import {Homepage} from "../pages/Homepage.ts";
import{SearchResults} from "../pages/SearchResults.ts";
import{TestConfig} from "../testconfig.ts"

let config:TestConfig;
let homepage : Homepage;
let searchresults: SearchResults;

test.beforeEach(async({page})=>{
    config = new TestConfig();
    await page.goto(config.appUrl);
    homepage= new Homepage(page);
    searchresults = new SearchResults(page);
})

test.afterEach(async({page})=>{
    page.close();
})

test("Product search @master @regression", async()=>{

    const product = config.productName;

    // Enter product name and click Search
    await homepage.enterProductName(product);
    await homepage.clickSearch();

    //Validate if the searched product appears in results
    await searchresults.isProductExist(product);


})
