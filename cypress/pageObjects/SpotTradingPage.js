class SpotTradingPage {
  elements = {
    section: () =>
      cy.contains('section', /Today’s top crypto prices|Spot Trading|Top crypto prices/i),

    categoryTabs: () =>
      this.elements
        .section()
        .find('button[role="tab"], [role="tab"], .tab, .chips button, .tabs button')
        .filter(':visible'),

    pairRows: () =>
      this.elements
        .section()
        .find('table tbody tr, [data-testid="trading-pair-row"], .trading-pair-row, .pair-row, li')
        .filter(':visible')
  };

  verifySectionVisible() {
    this.elements.section().should('be.visible');
  }

  verifyCategoriesExist() {
    this.elements.categoryTabs().should('have.length.greaterThan', 0);
  }

  verifyEachCategoryShowsPairs() {
    this.elements.categoryTabs().each(($tab) => {
      const categoryName = $tab.text().trim();

      cy.wrap($tab).click({ force: true });
      cy.log(`Validating category: ${categoryName}`);

      this.elements.pairRows().should('have.length.greaterThan', 0);
    });
  }
}

export default SpotTradingPage;