import BaseBookingPage from "./BaseBookingPage"
import {By, WebDriver} from "selenium-webdriver"
import {logger} from "../utils/logger";

export default class BookingAttractionsResultsPage extends BaseBookingPage {
  private readonly attractionsResultsLocator = By.className("Grid-module__column___2DBft")

  constructor(driver: WebDriver) {
    super(driver)
  }

  public isInitialized(): Promise<boolean> {
    logger.info("Attractions results page initialized")
    return super.isInitialized(this.attractionsResultsLocator)
  }
}