class LoginPage {
  getEmailTextBox() {
    return cy.get("#email", { timeout: 10000 });
  }

  getPasswordTextBox() {
    return cy.get("#pass", { timeout: 10000 });
  }

  getSignInButton() {
    return cy.get("#send2", { timeout: 10000 });
  }
}

export default LoginPage;
