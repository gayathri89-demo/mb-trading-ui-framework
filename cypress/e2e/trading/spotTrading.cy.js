import SpotTradingPage from "../../pageObjects/SpotTradingPage";

describe("Spot Trading", () => {
  beforeEach(() => {
    cy.visit("https://mb.io/en-AE/explore");
    cy.waitForPage();
  });

  it("validates spot trading section", () => {
    SpotTradingPage.verifySpotMarket();
  });
});