import BasePage from "./BasePage";

class AboutPage extends BasePage {
  verifyWhyMultibank() {
    this.scrollToText("Why MultiBank Group?");
  }
}

export default new AboutPage();