import NavigationPage from "../../pageObjects/NavigationPage";

describe("Top Navigation Menu", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("exploreUrl"), {
      failOnStatusCode: false
    });
    cy.get("body").should("be.visible");
  });

  it("should display the top navigation menu items", () => {
    cy.fixture("navigation").then((data) => {
      NavigationPage.verifyHeaderVisible();
      NavigationPage.verifyMenuItems(data.topMenuItems);
    });
  });

  it("should have valid href values for clickable menu items", () => {
    cy.fixture("navigation").then((data) => {
      data.clickableMenuItems.forEach((item) => {
        NavigationPage.verifyMenuItemHref(item);
      });
    });
  });

  it("should allow clicking clickable top navigation menu items", () => {
    cy.fixture("navigation").then((data) => {
      data.clickableMenuItems.forEach((item) => {
        cy.visit("https://mb.io/en-AE/explore", {
          failOnStatusCode: false
        });

        NavigationPage.clickMenuItem(item);
        cy.url().should("not.be.empty");
      });
    });
  });
});