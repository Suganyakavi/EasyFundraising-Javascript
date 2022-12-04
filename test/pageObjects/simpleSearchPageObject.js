const assert = require('assert');
const { Builder, By, until } = require('selenium-webdriver');
const {initDriver} = require('../support/driverUtil');

let driver = initDriver();
driver.manage().setTimeouts({implicit: (10000)});
driver.manage().window().maximize();

class SimpleSearchPageObject {

    constructor() {
        global.driver = driver;
        
    }
    
    async go_to_url(theURL){
        await driver.get(theURL);
    }

    async navigate_to_cause_page(causeLink){
        await driver.findElement(By.linkText(causeLink)).click();
    }

    async enter_the_cause(searchString){
        await driver.findElement(By.id("sagc-hero-search-input")).sendKeys(searchString);
    }

    async selectCauseSuggestionNumber(selectCauseSuggestionNumber){
        await driver.findElement(By.xpath(`//*[@id="sagc-hero-search-input-auto-suggest"]/li[${selectCauseSuggestionNumber}]/button[1]`)).click();
    }

    async searchCause(){
        await driver.findElement(By.id("sagc-hero-search-submit")).click();
    }

    async checkIfCauseFound(){
        let searchElement = await driver.findElement(By.xpath(`//*[@data-testid="title"]`)).getText();
        searchElement? console.log("Found the Cause in the Search: "+ searchElement) : console.error("Not able to find any Cause");
    }

    async closeBrowser(){
        //await driver.quit();
    }

}

module.exports = SimpleSearchPageObject;