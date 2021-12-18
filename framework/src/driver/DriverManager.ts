import {Browser, Builder, WebDriver} from "selenium-webdriver";
import {Options as ChromeOptions} from "selenium-webdriver/chrome";
import {Options as FirefoxOptions} from "selenium-webdriver/firefox"
import {optionsFlags} from "../utils/constants";

export default class DriverManager {
  private static driver: WebDriver

  public static getDriver(): Promise<WebDriver> {
    if (!this.driver) {
      let browser = "chrome"
      switch (browser) {
        case "chrome":
          return this.buildBrowserDriver(Browser.CHROME)
        case "firefox":
          return this.buildBrowserDriver(Browser.FIREFOX)
        default:
          return this.buildBrowserDriver(Browser.CHROME)
      }
    }
  }

  public static async closeDriver(): Promise<void> {
    await this.driver.quit()
    this.driver = null
  }

  private static async buildBrowserDriver(browser) {
    const builder = new Builder().forBrowser(browser)
    switch (browser) {
      case Browser.CHROME:
        builder.setChromeOptions(new ChromeOptions().addArguments()) // TODO: return options
        break
      case Browser.FIREFOX:
        builder.setFirefoxOptions(new FirefoxOptions().addArguments(...optionsFlags))
        break
    }

    const driver = builder.build()
    await driver.manage().window().maximize()
    return driver
  }
}