import {WebDriver} from "selenium-webdriver"
import BookingHomePage from "../pages/BookingHomePage"
import DriverManager from "../driver/DriverManager"
import BookingLoginPage from "../pages/BookingLoginPage"

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
      await bookingHomePage.isInitialized()
    ).toBeTruthy()
  })

  it("should open attractions search page on tab click", async () => {
    expect(
      await bookingHomePage
        .openAttractionsPage()
        .isInitialized()
    ).toBeTruthy()
  })

  it("should search hotel on given criteria", async () => {
    const bookingHotelsSearchResultPage = await bookingHomePage
      .sendHotelSearchForm()
    expect(
      bookingHotelsSearchResultPage
        .isInitialized()
    ).toBeTruthy()
  })
})

describe("Booking home page", () => {
  let driver: WebDriver
  let bookingHomePage: BookingHomePage

  beforeAll(async () => {
    driver = await DriverManager.getDriver()
    bookingHomePage = await new BookingLoginPage(driver).login(2)
  })

  afterAll(async () => {
    await DriverManager.closeDriver()
  })

  it("should open saved list page", async () => {
    const bookingSavedListPage = await bookingHomePage.openSavedListPage()
    expect(
      await bookingSavedListPage.isInitialized()
    ).toBeTruthy()
  })

  it("should open bookings list page", async () => {
    const bookingBookingsPage = await bookingHomePage
      .openHomePage()
      .openBookingsPage()
    expect(
      await bookingBookingsPage.isInitialized()
    ).toBeTruthy()
  })
})
