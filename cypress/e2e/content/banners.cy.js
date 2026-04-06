describe("Marketing Banners", () => {
  beforeEach(() => {
    cy.openBannersPage();
    cy.waitForPage();
    cy.activatePage();
    cy.document().its("readyState").should("eq", "complete");
  });

 it("validates marketing banner headlines", () => {
  cy.fixture("content").then((data) => {

    data.marketingBannerHeadline.forEach((bannerText) => {

      cy.contains("h1, h2, h3, p, div", bannerText, {
        matchCase: false,
        timeout: 20000
      })
        .should("exist")
        .scrollIntoView()
      //  .should("be.visible");

      cy.contains("h3", bannerText, {
      timeout: 20000,
      matchCase: false
      }).should("be.visible");

      });

   });
  });
});