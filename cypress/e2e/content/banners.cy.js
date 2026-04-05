describe("Marketing Banners", () => {
  beforeEach(() => {
    cy.visit("https://mb.io/en-AE/");
    cy.waitForPage();
    cy.document().its("readyState").should("eq", "complete");
  });

  it("validates the marketing banner headline", () => {
    const bannerText = /Unblemished\. Unstoppable\. United\./i;

    cy.contains("h3", bannerText, { timeout: 20000 })
      .should("exist")
      .and("contain.text", "Unblemished");
  });
});