import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { defaultPassword, pageTitle, userDetails } from "../commons/constants";
import RegistrationPage from "../pageObjects/registerationPage";
import { getRandomString } from "../commons/util";

const registerationPage = new RegistrationPage();

let emailId;

When(
  "I enter all the user details and click on create an account button",
  function () {
    emailId = "automation-bot-" + getRandomString(5) + "@test.com";
    
    cy.setEmailId(emailId);  // to use this for further verification and signIn to account 

    registerationPage.getFirstNameTextBox().type(userDetails.FIRST_NAME);
    registerationPage.getLastNameTextBox().type(userDetails.LAST_NAME);
    registerationPage.getEmailTextBox().type(emailId);
    registerationPage.getPasswordTextBox().type(defaultPassword.USER_PASSWORD);
    registerationPage
      .getConfirmPasswordTextBox()
      .type(defaultPassword.USER_PASSWORD);
    registerationPage.getCreateAccountButton().click();
  }
);
