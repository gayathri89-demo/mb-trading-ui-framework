import BasePage from "./BasePage";

class NavigationPage extends BasePage {
  elements = {
    header: () => cy.get("header"),
    nav: () => cy.get("header nav"),
    navLinks: () => cy.get("header nav a")
  };

  verifyHeaderVisible() {
    this.elements.header().should("be.visible");
    this.elements.nav().should("be.visible");
  }

  verifyMenuItems(menuItems) {
    menuItems.forEach((item) => {
      this.elements.nav()
        .contains(item, { matchCase: false })
        .should("be.visible");
    });
  }

  verifyMenuItemHref(menuItem) {
    cy.contains("header nav a", menuItem, { matchCase: false })
      .should("have.attr", "href")
      .and("not.be.empty");
  }

  clickMenuItem(menuItem) {
    cy.contains("header nav a", menuItem, { matchCase: false })
      .click({ force: true });
  }
}

export default new NavigationPage();