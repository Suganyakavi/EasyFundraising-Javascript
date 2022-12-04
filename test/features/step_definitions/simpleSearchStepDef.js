const { Given, When, Then, After, Before } = require('@cucumber/cucumber');
const SimpleSearchPageObject = require('../../pageObjects/simpleSearchPageObject');


var simpleSearchPageObject = new SimpleSearchPageObject();

Before(async function () {
  
  });

  Given('user open the website {string}', async function (theURL) {
    await simpleSearchPageObject.go_to_url(theURL);
  });

  When('Go to the link {string} on the top of the page', async function (causeLink) {
    await simpleSearchPageObject.navigate_to_cause_page(causeLink);
  });

  When('User Enter {string} in the search field', async function (searchString) {
    await simpleSearchPageObject.enter_the_cause(searchString);
  });

  When('User select the {int}rd cause from the suggestion list', async function (selectCauseSuggestionNumber) {
    await simpleSearchPageObject.selectCauseSuggestionNumber(selectCauseSuggestionNumber);
    
  });

  When('click Search Cause', async function () {
    await simpleSearchPageObject.searchCause();
  });

  Then('Confirm with a message that the selected third Cause exists in the Search results', async function () {
    await simpleSearchPageObject.checkIfCauseFound();
   
  });

  After(async () =>  {
    await simpleSearchPageObject.closeBrowser();
  });