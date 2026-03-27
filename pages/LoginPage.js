export class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.loginButton = '#submit';
  }

  async navigate() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}