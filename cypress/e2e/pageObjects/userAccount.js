class UserAccountPage {
  getLoggedInuser() {
    return cy.get(".greet > .logged-in", { timeout: 10000 });
  }

  getAccountInfo() {
    return cy.get(".box-content > p", { timeout: 10000 });
  }

  getRegistrationSuccessfulMessage() {
    return cy.get(".message-success > div", { timeout: 10000 });
  }

  getUserActions() {
    return cy.get(
      ":nth-child(2) > .customer-welcome > .customer-name > .action",
      { timeout: 10000 }
    );
  }

  getUserActionMenu() {
    return cy.get('button.action.switch[data-action="customer-menu-toggle"]', {
      timeout: 10000,
    });
  }

  getLogOutLink() {
    return cy.get(
      ":nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a",
      { timeout: 10000 }
    );
  }
}
export default UserAccountPage;
