import BaseBookingPage from "./BaseBookingPage"
import {By, WebDriver} from "selenium-webdriver"

export default class BookingAttractionsResultsPage extends BaseBookingPage {
  private readonly attractionsResultsLocator = By.className("css-wuc7a6")

  constructor(driver: WebDriver) {
    super(driver)
  }

  public isInitialized(): Promise<boolean> {
    return super.isInitialized(this.attractionsResultsLocator)
  }
}