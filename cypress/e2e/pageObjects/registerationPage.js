class RegistrationPage {
  getFirstNameTextBox() {
    return cy.get("#firstname", { timeout: 10000 });
  }

  getLastNameTextBox() {
    return cy.get("#lastname", { timeout: 10000 });
  }

  getEmailTextBox() {
    return cy.get("#email_address", { timeout: 10000 });
  }

  getPasswordTextBox() {
    return cy.get("#password", { timeout: 10000 });
  }

  getConfirmPasswordTextBox() {
    return cy.get("#password-confirmation", { timeout: 10000 });
  }

  getCreateAccountButton() {
    return cy.get("#form-validate > .actions-toolbar > div.primary > .action", {
      timeout: 10000,
    });
  }
}

export default RegistrationPage;
