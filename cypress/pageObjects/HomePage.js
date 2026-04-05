import BasePage from "./BasePage";

class HomePage extends BasePage {
  open() {
    this.visit("https://mb.io");
  }


  verifyHero(texts) {
    texts.forEach((text) => this.verifyText(text));
  }

  verifyWhySection() {
    this.scrollToText("Why MultiBank Group?");
  }
}

export default new HomePage();