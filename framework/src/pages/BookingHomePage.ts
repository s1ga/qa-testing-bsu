import {By, WebDriver} from "selenium-webdriver"
import BaseBookingPage from "./BaseBookingPage"
import BookingAttractionsPage from "./BookingAttractionsPage"
import SearchForm from "../model/SearchForm"
import {SearchFormCreator} from "../service/SearchFormCreator"
import BookingHotelsSearchResultPage from "./BookingHotelsSearchResultPage"
import BookingSavedListPage from "./BookingSavedListPage"
import BookingBookingsPage from "./BookingBookingsPage"
import {logger} from "../utils/logger";

export default class BookingHomePage extends BaseBookingPage {
  private static readonly HOME_PAGE_URL = "https://www.booking.com/"

  private searchForm: SearchForm

  private readonly attractionsTabLocator: By = By.xpath("//a[@class='bui-tab__link' and @data-decider-header='attractions']")
  private readonly userDropdownLocator: By = By.xpath("//a[@data-bui-ref='dropdown-button']")
  private readonly destinationLocator: By = By.id("ss")
  private readonly datesLocator: By = By.className("xp__dates")
  private readonly searchFormBtnLocator: By = By.className("sb-searchbox__button ")
  public readonly savedListBtnLocator: By = By.xpath("//li[@class='bui-dropdown-menu__item'][4]")
  public readonly bookingsListBtnLocator: By = By.xpath("//li[@class='bui-dropdown-menu__item'][2]")

  constructor(driver: WebDriver) {
    super(driver)
  }

  private get checkInDateLocator(): By {
    return By.xpath(`//td[@class='bui-calendar__date' and @data-date='${this.searchForm.getCheckIn()}']`)
  }

  private get checkOutDateLocator(): By {
    return By.xpath(`//td[@class='bui-calendar__date' and @data-date='${this.searchForm.getCheckOut()}']`)
  }

  private async setSearchForm(): Promise<void> {
    this.searchForm = await SearchFormCreator.getSearchForm()
  }

  private async fillSearchForm(): Promise<void> {
    await this.setSearchForm()

    await this.enterText(this.destinationLocator, this.searchForm.getDestination())
    await this.findElementByLocator(this.datesLocator).click()
    await this.findElementByLocator(this.checkInDateLocator).click()
    await this.findElementByLocator(this.checkOutDateLocator).click()
  }

  public isInitialized(): Promise<boolean> {
    logger.info("Home page initialized")
    return super.isInitialized(this.attractionsTabLocator)
  }

  public isUserInitialized(): Promise<boolean> {
    logger.info("User initialized")
    return super.isInitialized(this.userDropdownLocator)
  }

  public openHomePage(): this {
    (async () => {
      await this.driver.get(BookingHomePage.HOME_PAGE_URL)
    })()

    logger.info("Home page opened")
    return this
  }

  public openAttractionsPage(): BookingAttractionsPage {
    (async () => {
      await this.findElementByLocator(this.attractionsTabLocator).click()
    })()

    logger.info("Attractions page opened")
    return new BookingAttractionsPage(this.driver)
  }

  public async sendHotelSearchForm(): Promise<BookingHotelsSearchResultPage> {
    await this.fillSearchForm()
    await this.findElementByLocator(this.searchFormBtnLocator).click()

    logger.info("Hotels search form sent")
    return new BookingHotelsSearchResultPage(this.driver)
  }

  public async openSavedListPage(): Promise<BookingSavedListPage> {
    await this.findElementByLocator(this.userDropdownLocator).click()
    if (await super.isInitialized(this.savedListBtnLocator)) {
      await this.findElementByLocator(this.savedListBtnLocator).click()
    }

    logger.info("Saved lists page opened")
    return new BookingSavedListPage(this.driver)
  }

  public async openBookingsPage(): Promise<BookingBookingsPage> {
    await this.findElementByLocator(this.userDropdownLocator).click()

    if (await super.isInitialized(this.bookingsListBtnLocator)) {
      await this.findElementByLocator(this.bookingsListBtnLocator).click()
    }

    logger.info("Bookings page opened")
    return new BookingBookingsPage(this.driver)
  }
}
