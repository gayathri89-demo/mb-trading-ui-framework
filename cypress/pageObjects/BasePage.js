class BasePage {
  visit(path) {
    cy.visit(path, { failOnStatusCode: false });
  }

  verifyText(text) {
    cy.contains(text, { matchCase: false }).should("be.visible");
  }

  scrollToText(text) {
    cy.contains(text, { matchCase: false }).scrollIntoView().should("be.visible");
  }

  clickText(text) {
    cy.contains(text, { matchCase: false }).click();
  }
}

export default BasePage;