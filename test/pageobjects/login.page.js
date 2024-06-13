import { $ } from "@wdio/globals";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $("#user-name");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $("#login-button");
  }

  async login(username, password) {
    await browser.url("https://www.saucedemo.com/");
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }
}

export default new LoginPage();
