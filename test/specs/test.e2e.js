import LoginPage from "../pageobjects/login.page.js";
import loginData from "../testdata/loginCredentials.js";

describe("My Login application", () => {
  loginData.login.forEach((login) => {
    it("should login with valid credentials", async () => {
      await LoginPage.login(login.username, login.password);
    });
  });
});

// This is test comment
