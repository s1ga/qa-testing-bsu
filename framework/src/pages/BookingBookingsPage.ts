import BaseBookingPage from "./BaseBookingPage"
import {By, WebDriver} from "selenium-webdriver"
import {logger} from "../utils/logger";

export default class BookingBookingsPage extends BaseBookingPage {
  private readonly bookingsMessageLocator: By = By.className("EmptyState_title__3Ctdc")

  constructor(driver: WebDriver) {
    super(driver)
  }

  public isInitialized(): Promise<boolean> {
    logger.info("Bookings page initialized")
    return super.isInitialized(this.bookingsMessageLocator)
  }
}
