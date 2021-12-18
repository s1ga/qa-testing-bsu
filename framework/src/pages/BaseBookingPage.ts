import {By, until, WebDriver, WebElementPromise} from "selenium-webdriver"

export default class BaseBookingPage {
  protected driver: WebDriver

  constructor(driver: WebDriver) {
    this.driver = driver
  }

  protected async isInitialized(locator: By): Promise<boolean> {
    return this.findElementByLocator(locator).isDisplayed()
  }

  protected findElementByLocator(locator: By): WebElementPromise {
    return this.driver.wait(until.elementLocated(locator))
  }

  protected async enterTextToInteractableEl(locator: By, value: string): Promise<this> {
    await this.driver.wait(until.stalenessOf(this.driver.findElement(locator)))
    await this.driver.findElement(locator).sendKeys('')
    await this.driver.findElement(locator).sendKeys(value)
    return this
  }

  protected async enterText(locator: By, value: string): Promise<this> {
    await this.findElementByLocator(locator).sendKeys('')
    await this.findElementByLocator(locator).sendKeys(value)
    return this
  }
}
