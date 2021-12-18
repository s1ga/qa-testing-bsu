import BaseBookingPage from "./BaseBookingPage"
import {By, WebDriver} from "selenium-webdriver"
import SavedHotelCreator from "../service/SavedHotelCreator"
import Hotel from "../model/Hotel";
import {logger} from "../utils/logger";

export default class BookingHotelsSearchResultPage extends BaseBookingPage {
  private readonly resultCardLocator: By = By.xpath("//div[@data-testid='property-card'][1]")
  private readonly addToSavedListBtnLocator: By = By.xpath("//div[@data-testid='property-card'][1]//button[@class='b3955c2df2']")
  private readonly hotelAddedToSavedLocator: By = By.xpath("//div[@data-testid='property-card'][1]//span[@data-testid='wishlist-icon' and contains(@class, '_e421db071')]")
  private readonly hotelTitleLocator: By = By.xpath("//div[@data-testid='property-card'][1]//div[@data-testid='title']")
  private readonly savedListNameLocator: By = By.xpath("//div[@data-testid='wishlist-popover-content']//span")

  constructor(driver: WebDriver) {
    super(driver)
  }

  private async addHotelToSavedListStorage(): Promise<Hotel> {
    return SavedHotelCreator.setHotel(
      await this.findElementByLocator(this.hotelTitleLocator).getText(),
      true,
      await this.findElementByLocator(this.savedListNameLocator).getText()
    )
  }

  public isInitialized(): Promise<boolean> {
    logger.info("Hotels search result page initialized")
    return super.isInitialized(this.resultCardLocator)
  }

  public async addHotelToSavedList(): Promise<Hotel> {
    await this.findElementByLocator(this.addToSavedListBtnLocator).click()
    logger.info("Hotel added to saved list")
    return this.addHotelToSavedListStorage()
  }

  public isHotelAddedToSavedList(): Promise<boolean> {
    return super.isInitialized(this.hotelAddedToSavedLocator)
  }
}