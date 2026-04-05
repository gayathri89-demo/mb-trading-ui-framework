import BasePage from "./BasePage";

class AboutPage extends BasePage {
  verifyWhyMultibank(headingText) {
    this.scrollToText(headingText);
  }
}

export default new AboutPage();