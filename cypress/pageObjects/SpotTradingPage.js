import BasePage from "./BasePage";

class SpotTradingPage extends BasePage {
  verifySpotMarket() {
    this.scrollToText("Spot market");
  }
}

export default new SpotTradingPage();