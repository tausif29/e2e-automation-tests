import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import {
  defaultPassword,
  notifications,
  pageTitle,
  userDetails,
} from "../commons/constants";

import UserAccountPage from "../pageObjects/userAccount";

const userAccountPage = new UserAccountPage();


Then(
  "I verify user registration is successful along with account details",
  function () {
    cy.title().should("eq", pageTitle.USER_ACCOUNT_PAGE);
    userAccountPage
      .getRegistrationSuccessfulMessage()
      .contains(notifications.REGISTRATION_SUCCESSFUL);

    userAccountPage.getLoggedInuser().contains(userDetails.USER_FULL_NAME);
    userAccountPage.getAccountInfo().contains(userDetails.USER_FULL_NAME);
    //Verifying registered email address
    cy.getEmailId().then((emailId) => {
      userAccountPage.getAccountInfo().contains(emailId);
    });
  }
);

Then("I verify user logged in successfully", function () {
  cy.title().should("eq", pageTitle.HOME_PAGE);
  
  userAccountPage.getLoggedInuser().contains(userDetails.USER_FULL_NAME);
  
});
