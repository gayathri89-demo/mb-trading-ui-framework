import AboutPage from "../../pageObjects/AboutPage";

describe("Why MultiBank", () => {
  beforeEach(() => {
    cy.visit("https://mb.io/en-AE/company");
    cy.waitForPage();
  });

  it("validates the Why MultiBank section", () => {
    AboutPage.verifyWhyMultibank();
  });
});