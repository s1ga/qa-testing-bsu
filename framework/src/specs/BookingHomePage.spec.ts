import {WebDriver} from "selenium-webdriver"
import BookingHomePage from "../pages/BookingHomePage"
import DriverManager from "../driver/DriverManager";

jest.setTimeout(10000)

describe("Booking home page", () => {
  let driver: WebDriver
  let bookingHomePage: BookingHomePage

  beforeAll(async () => {
    driver = await DriverManager.getDriver()
  })

  beforeEach(() => {
    bookingHomePage = new BookingHomePage(driver).openHomePage()
  })

  afterAll(async () => {
    await DriverManager.closeDriver()
  })

  it("should be initialized", async () => {
    expect(
      await bookingHomePage
        .isInitialized()
    ).toBeTruthy()
  })

  it("should open attractions search page on tab click", async () => {
    expect(
      await bookingHomePage
        .openAttractionsPage()
        .isInitialized()
    ).toBeTruthy()
  })
})
