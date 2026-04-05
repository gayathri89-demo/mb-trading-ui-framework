import AboutPage from "../../pageObjects/AboutPage";

describe("Why MultiBank", () => {
  beforeEach(() => {
    cy.openCompanyPage();
    cy.waitForPage();
  });

   it("validates the Why MultiBank section", () => {
    cy.fixture("content").then((data) => {
      AboutPage.verifyWhyMultibank(data.whyMultibankHeading);
    });
    });
});