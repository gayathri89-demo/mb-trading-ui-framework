describe("Marketing Banners", () => {
  beforeEach(() => {
    cy.visit("https://mb.io/en-AE/");
    cy.waitForPage();
  });

  it("validates the marketing banner headline", () => {
    cy.contains("h3", "Unblemished. Unstoppable. United.", {
      matchCase: false,
      timeout: 15000,
    })
      .scrollIntoView()
      .should("be.visible");
  });
});