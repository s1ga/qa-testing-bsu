import {WebDriver} from "selenium-webdriver"
import BookingHomePage from "../pages/BookingHomePage"
import {buildChromeDriver} from "../utils"

jest.setTimeout(10000)

describe("Booking home page", () => {
  let driver: WebDriver
  let bookingHomePage: BookingHomePage

  beforeAll(() => {
    driver = buildChromeDriver()
  })

  beforeEach(() => {
    bookingHomePage = new BookingHomePage(driver).openHomePage()
  })

  afterAll(async () => {
    await driver.quit()
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
