import {By, until, WebDriver, WebElementPromise} from "selenium-webdriver"

export default class BaseBookingPage {
  protected driver: WebDriver

  constructor(driver: WebDriver) {
    this.driver = driver
  }

  protected isInitialized(locator: By): Promise<boolean> {
    return this.findElementByLocator(locator).isDisplayed()
  }

  protected findElementByLocator(locator: By): WebElementPromise {
    return this.driver.wait(until.elementLocated(locator), 15000)
  }
}