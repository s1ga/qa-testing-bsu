import {By, WebDriver} from "selenium-webdriver"
import BaseBookingPage from "./BaseBookingPage";
import BookingAttractionsPage from "./BookingAttractionsPage";

export default class BookingHomePage extends BaseBookingPage {
  private static readonly HOME_PAGE_URL = "https://www.booking.com/"

  private readonly attractionsTabLocator: By = By.xpath("//a[@class='bui-tab__link' and @data-decider-header='attractions']")

  constructor(driver: WebDriver) {
    super(driver)
  }

  public isInitialized(): Promise<boolean> {
    return super.isInitialized(this.attractionsTabLocator)
  }

  public openHomePage(): this {
    (async () => {
      await this.driver.get(BookingHomePage.HOME_PAGE_URL)
    })()

    return this
  }

  public openAttractionsPage(): BookingAttractionsPage {
    (async () => {
      await this.findElementByLocator(this.attractionsTabLocator).click()
    })()

    return new BookingAttractionsPage(this.driver)
  }
}
