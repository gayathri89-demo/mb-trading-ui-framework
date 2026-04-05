


describe("Download Links", () => {
  beforeEach(() => {
    cy.visit("https://mb.io/en-AE/");
    cy.waitForPage();
  });

  it("validates Download the app button", () => {
    cy.get('a[data-slot="button"][data-button-type="download"]')
  .contains('Download the app')
  .should('be.visible')
  .invoke('removeAttr', 'target')
  .click();
  });
  
 it("validates Download section links redirect to App Store or Google Play", () => {

    cy.contains('Download the app')
      .scrollIntoView()
      .should('be.visible');

    cy.get('a[data-slot="button"][data-button-type="download"]')
      .should('have.attr', 'href')
      .then((url) => {

        cy.request({
          url,
          followRedirect: false
        }).then((res) => {

          expect(res.status).to.be.oneOf([301, 302]);

          const location = res.headers.location;

          // ✅ Accept either Apple OR Play Store
          expect(location).to.match(/apple\.com|play\.google\.com/);

          cy.log('Redirected to:', location);
        });
      });

  });

});