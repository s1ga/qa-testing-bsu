import {By, WebDriver} from "selenium-webdriver"
import BaseBookingPage from "./BaseBookingPage"
import BookingAttractionsResultsPage from "./BookingAttractionsResultsPage"

export default class BookingAttractionsPage extends BaseBookingPage {
  private readonly attractionsSearchFormLocator = By.className("css-1ano46h")
  private readonly attractionsSearchFormInputLocator = By.name("query")
  private readonly attractionsSearchFormSubmitLocator = By.css(".css-1ano46h > button[type=submit]")
  private readonly attractionsSearchFormDropdownItemLocator = By.css(".css-z40vte > ul:first-child > li:last-child > a")

  constructor(driver: WebDriver) {
    super(driver)
  }

  public isInitialized(): Promise<boolean> {
    return super.isInitialized(this.attractionsSearchFormLocator)
  }

  public enterTextInSearchForm(value: string): this {
    (async () => {
      await this.findElementByLocator(this.attractionsSearchFormInputLocator).sendKeys(value)
    })()

    return this
  }

  public getEnteredInFormText(): Promise<string> {
    return this.findElementByLocator(this.attractionsSearchFormInputLocator).getAttribute("value")
  }

  public isSearchDropdownInit(): Promise<boolean> {
    return super.isInitialized(this.attractionsSearchFormDropdownItemLocator)
  }

  public findAttractionsOnDropdownItemClick(): BookingAttractionsResultsPage {
    (async () => {
      await this.findElementByLocator(this.attractionsSearchFormDropdownItemLocator).click()
    })()

    return new BookingAttractionsResultsPage(this.driver)
  }

  public findAttractionsOnClick(): BookingAttractionsResultsPage {
    (async () => {
      await this.findElementByLocator(this.attractionsSearchFormSubmitLocator).click()
      await this.findElementByLocator(this.attractionsSearchFormSubmitLocator).click()
    })()

    return new BookingAttractionsResultsPage(this.driver)
  }
}