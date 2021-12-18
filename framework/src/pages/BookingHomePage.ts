import {By, WebDriver} from "selenium-webdriver"
import BaseBookingPage from "./BaseBookingPage"
import BookingAttractionsPage from "./BookingAttractionsPage"

export default class BookingHomePage extends BaseBookingPage {
  private static readonly HOME_PAGE_URL = "https://www.booking.com/"

  private readonly attractionsTabLocator: By = By.xpath("//a[@class='bui-tab__link' and @data-decider-header='attractions']")
  private readonly userDropdownLocator: By = By.css("a[aria-label='Open the profile menu']")

  constructor(driver: WebDriver) {
    super(driver)
  }

  public isInitialized(): Promise<boolean> {
    return super.isInitialized(this.attractionsTabLocator)
  }

  public isUserInitialized(): Promise<boolean> {
    return super.isInitialized(this.userDropdownLocator)
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
