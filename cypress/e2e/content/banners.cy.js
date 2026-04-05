describe("Marketing Banners", () => {
  beforeEach(() => {
    cy.visit("https://mb.io/en-AE/");
    cy.waitForPage();
    cy.document().its("readyState").should("eq", "complete");
  });

 it("validates marketing banner headlines", () => {
  cy.fixture("content").then((data) => {

    data.marketingBannerHeadline.forEach((bannerText) => {

      cy.contains("h1, h2, h3, p, div", bannerText, {
        matchCase: false,
        timeout: 20000
      })
        .scrollIntoView()
        .should("be.visible");

    });

  });
  });
});