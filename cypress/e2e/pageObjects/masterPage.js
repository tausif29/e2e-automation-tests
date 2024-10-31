class MasterPage {
  getBasePanel() {
    return cy.get(".base", { timeout: 10000 });
  }

  getHeader() {
    return cy.get(".page-header > .content", { timeout: 10000 });
  }

  getSignInLink() {
    return cy.get(".panel > .header > .authorization-link > a", {
      timeout: 10000,
    });
  }

  getCreateAccountLink() {
    return cy.get(".panel > .header > :nth-child(3) > a", { timeout: 10000 });
  }
}

export default MasterPage;
