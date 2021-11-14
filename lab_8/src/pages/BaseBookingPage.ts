import {By, until, WebDriver, WebElement} from "selenium-webdriver"

export default class BaseBookingPage {
  protected driver: WebDriver

  constructor(driver: WebDriver) {
    this.driver = driver
  }

  protected isInitialized(locator: By): Promise<boolean> {
    return this.findElementByLocator(locator).isDisplayed()
  }

  protected findElementByLocator(locator: By): WebElement {
    return this.driver.wait(until.elementLocated(locator))
  }
}