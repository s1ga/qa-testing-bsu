import {Browser, Builder, Capabilities, WebDriver} from "selenium-webdriver"
import {Options as ChromeOptions} from "selenium-webdriver/chrome"
import {Options as FirefoxOptions} from "selenium-webdriver/firefox"
import {optionsFlags} from "../utils/constants"

export default class DriverManager {
  private static driver: WebDriver

  public static async getDriver(): Promise<WebDriver> {
    if (!this.driver) {
      switch (global.BROWSER) {
        case "chrome":
          this.driver = await this.buildBrowserDriver(Browser.CHROME)
          break
        case "firefox":
          this.driver = await this.buildBrowserDriver(Browser.FIREFOX)
          break
        default:
          this.driver = await this.buildBrowserDriver(Browser.CHROME)
      }
    }

    return this.driver
  }

  public static async closeDriver(): Promise<void> {
    await this.driver.quit()
    this.driver = null
  }

  private static async buildBrowserDriver(browser) {
    const builder = new Builder()
      .withCapabilities(new Capabilities().setPageLoadStrategy('normal'))
      .forBrowser(browser)
    switch (browser) {
      case Browser.CHROME:
        builder.setChromeOptions(new ChromeOptions().addArguments(...optionsFlags))
        break
      case Browser.FIREFOX:
        builder.setFirefoxOptions(new FirefoxOptions().addArguments(...optionsFlags))
        break
    }

    const driver = builder.build()
    await driver.manage().deleteAllCookies()
    await driver.manage().window().maximize()
    return driver
  }
}