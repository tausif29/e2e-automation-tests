import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { defaultPassword, pageTitle } from "../commons/constants";
import UserAccountPage from "../pageObjects/userAccount";
import MasterPage from "../pageObjects/masterPage";
import LoginPage from "../pageObjects/loginPage";

const userAccountPage = new UserAccountPage();
const masterPage = new MasterPage();
const loginPage = new LoginPage();

Given("I open the website", function () {
  cy.visit("/");
  cy.title().should("eq", pageTitle.HOME_PAGE);
});

When(
  "I click on {string} link and navigate to the {string} page",
  function (linkToClick, pageToNavigate) {
    cy.contains("a", linkToClick).click();

    if (pageToNavigate === "Registration") {
      cy.title().should("eq", pageTitle.REGISTRATION_PAGE);
    } else if (pageToNavigate === "Login") {
      cy.title().should("eq", pageTitle.USER_LOGIN_PAGE);
    }
  }
);

When("I logout from the account", function () {
  userAccountPage.getUserActions().click();
  userAccountPage.getUserActionMenu().should("be.visible");
  userAccountPage.getLogOutLink().click();
  masterPage.getBasePanel().contains("You are signed out");
});

When("I login to the account with newly created credentials", function () {
  //Using the same emailId to login that was used while registation
  cy.getEmailId().then((emailId) => {
    loginPage.getEmailTextBox().type(emailId);
  });
  loginPage.getPasswordTextBox().type(defaultPassword.USER_PASSWORD);
  loginPage.getSignInButton().click();
});
