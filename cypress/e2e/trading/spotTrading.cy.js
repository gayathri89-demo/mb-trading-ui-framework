describe('Spot trading section', () => {
  beforeEach(() => {
    cy.visit('https://mb.io/en-AE/explore');
  });

  it('displays trading pairs correctly', () => {
    cy.contains('section', /Today’s top crypto prices|Spot Trading|Top crypto prices/i)
      .scrollIntoView()
      .should('be.visible')
      .as('spotSection');

    cy.get('@spotSection')
      .should('contain.text', 'MBG'); // this is visible in your screenshot

    cy.get('@spotSection')
      .invoke('text')
      .then((text) => {
        console.log('Section text:', text);
      });
  });
});
