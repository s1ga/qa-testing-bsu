import {By, WebDriver} from "selenium-webdriver"
import BaseBookingPage from "./BaseBookingPage"
import BookingAttractionsResultsPage from "./BookingAttractionsResultsPage"
import {logger} from "../utils/logger";

export default class BookingAttractionsPage extends BaseBookingPage {
  private readonly attractionsSearchFormLocator = By.className("css-1ano46h")
  private readonly attractionsSearchFormInputLocator = By.name("query")
  private readonly attractionsSearchFormSubmitLocator = By.css(".css-1ano46h > button[type=submit]")
  private readonly attractionsSearchFormDropdownItemLocator = By.css(".css-z40vte > ul:first-child > li:last-child > a")

  constructor(driver: WebDriver) {
    super(driver)
  }

  public isInitialized(): Promise<boolean> {
    logger.info("Attraction page initialized")
    return super.isInitialized(this.attractionsSearchFormLocator)
  }

  public enterTextInSearchForm(value: string): Promise<this> {
    return this.enterText(this.attractionsSearchFormInputLocator, value)
  }

  public getEnteredInFormText(): Promise<string> {
    return this.findElementByLocator(this.attractionsSearchFormInputLocator).getAttribute("value")
  }

  public isSearchDropdownInit(): Promise<boolean> {
    return super.isInitialized(this.attractionsSearchFormDropdownItemLocator)
  }

  public async findAttractionsOnDropdownItemClick(): Promise<BookingAttractionsResultsPage> {
    const btn = await this.findElementByLocator(this.attractionsSearchFormDropdownItemLocator)
    await btn.click()

    logger.info("Attraction results page opened")
    return new BookingAttractionsResultsPage(this.driver)
  }

  public async findAttractionsOnClick(): Promise<BookingAttractionsResultsPage> {
    const btn = await this.findElementByLocator(this.attractionsSearchFormSubmitLocator)
    await btn.click()

    logger.info("Attraction results page opened")
    return new BookingAttractionsResultsPage(this.driver)
  }
}