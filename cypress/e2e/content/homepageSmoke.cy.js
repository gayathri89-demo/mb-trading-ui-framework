import HomePage from "../../pageObjects/HomePage";

describe("Homepage Smoke", () => {
  it("should load homepage", () => {
    HomePage.open();
    cy.waitForPage();
    cy.get("body").should("be.visible");
  });
});