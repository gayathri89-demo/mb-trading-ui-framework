// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options
// ) => { ... })
Cypress.Commands.add("openHomepage", () => {
  cy.visit(Cypress.env("tradeHomepageUrl"));
  cy.waitForPage();
});

Cypress.Commands.add("openSpotTrading", () => {
  cy.visit(Cypress.env("exploreUrl"));
  cy.waitForPage();
});

Cypress.Commands.add("openBannersPage", () => {
  cy.visit(Cypress.env("bannersUrl"));
  cy.waitForPage();
});

Cypress.Commands.add("openCompanyPage", () => {
  cy.visit(Cypress.env("companyUrl"));
  cy.waitForPage();
});

Cypress.Commands.add("waitForPage", () => {
  cy.get("body").should("be.visible");
});

Cypress.Commands.add("activatePage", () => {
  cy.get("body").should("be.visible").click(0, 0, { force: true });
});

Cypress.Commands.add("scrollToText", (text) => {
  cy.contains(text, { matchCase: false }).scrollIntoView().should("be.visible");
});