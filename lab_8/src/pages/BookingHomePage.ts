import {Browser, Builder, By, WebDriver, WebElement} from "selenium-webdriver"

export default class BookingHomePage {
  private static readonly HOME_PAGE_URL = 'https://www.booking.com/'

  private driver: WebDriver

  private readonly formLocator: By = By.id('frm')
  private readonly destinationLocator: By = By.id('ss')

  constructor(driver: WebDriver) {
    this.driver = driver
  }

  public isInitialized(): Promise<boolean> {
    return this.findElementByLocator(this.formLocator).isDisplayed()
  }

  public openHomePage(): this {
    (async () => {
      await this.driver.get(BookingHomePage.HOME_PAGE_URL)
    })()

    return this
  }

  private findElementByLocator(locator: By) {
    return this.driver.findElement(locator)
  }
}

new BookingHomePage(new Builder().forBrowser(Browser.CHROME).build())
  .openHomePage()