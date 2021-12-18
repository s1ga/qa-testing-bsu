import BaseBookingPage from "./BaseBookingPage"
import {By, WebDriver} from "selenium-webdriver"
import {logger} from "../utils/logger";

export default class BookingSavedListPage extends BaseBookingPage {
  private readonly savedListsDropdownBtnLocator: By = By.xpath("//button[@data-bui-ref='dropdown-button']")
  private readonly savedListsLocator: By = By.className("listview__lists")

  constructor(driver: WebDriver) {
    super(driver)
  }

  private getHotelCardLocator(title: string): By {
    return By.xpath(`//h1[@class='bui-card__title']/a[contains(text(), '${title}')]`)
  }

  private getSavedListLocator(listName: string): By {
    return By.xpath(`//span[@class='listmap__list_name' and contains(text(), '${listName}')]`)
  }

  private getRemoveSavedHotelBtnLocator(title: string): By {
    return By.xpath(`//h1[@class='bui-card__title']/a[contains(text(), '${title}')]/ancestor::div[@class='bui-card__content']/a[@class='listview__remove_hotel_icon']`)
  }

  public isInitialized(): Promise<boolean> {
    logger.info("Saved lists page initialized")
    return super.isInitialized(this.savedListsDropdownBtnLocator)
  }

  public async openSavedList(listName: string): Promise<BookingSavedListPage> {
    await this.findElementByLocator(this.savedListsDropdownBtnLocator).click()
    if (await super.isInitialized(this.savedListsLocator)) {
      await this.findElementByLocator(this.getSavedListLocator(listName)).click()
    }

    logger.info("Saved lists page opened")
    return new BookingSavedListPage(this.driver)
  }

  public isHotelExists(title: string): Promise<boolean> {
    return super.isInitialized(this.getHotelCardLocator(title))
  }

  public async removeHotelFromList(title: string): Promise<void> {
    await this.findElementByLocator(this.getRemoveSavedHotelBtnLocator(title)).click()
    logger.info("Hotel removed from saved list")
  }
}