describe("Download Links", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("bannersUrl"));
    cy.waitForPage();
  });

  it("validates Download the app button and redirect to App Store or Google Play", () => {
    cy.get('a[data-slot="button"][data-button-type="download"]')
      .contains("Download the app")
      .scrollIntoView()
      .should("be.visible")
      .and("have.attr", "href")
      .then((url) => {
        expect(url).to.not.be.empty;
        cy.log(`Download button href: ${url}`);

    cy.get('a[data-slot="button"][data-button-type="download"]')
      .contains("Download the app")
      .invoke("removeAttr", "target")
      .click();
        cy.request({
          url,
          followRedirect: false,
        }).then((res) => {
          expect(res.status).to.be.oneOf([301, 302]);

          const redirectUrl = res.headers.location;
          expect(redirectUrl).to.match(/apple\.com|play\.google\.com/);

          cy.log(`Redirected to: ${redirectUrl}`);
        });
      });
  });
});