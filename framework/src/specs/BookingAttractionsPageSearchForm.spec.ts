import BookingHomePage from "../pages/BookingHomePage"
import {WebDriver} from "selenium-webdriver"
import BookingAttractionsPage from "../pages/BookingAttractionsPage"
import DriverManager from "../driver/DriverManager"

describe("Booking attractions page", () => {
  let driver: WebDriver
  let bookingAttractionsPage: BookingAttractionsPage

  beforeAll(async () => {
    driver = await DriverManager.getDriver()
  })

  beforeEach(() => {
    bookingAttractionsPage = new BookingHomePage(driver)
      .openHomePage()
      .openAttractionsPage()
  })

  afterAll(async () => {
    await DriverManager.closeDriver()
  })

  it("should contain entered text", async () => {
    const text = "lon"
    expect(
      await (await bookingAttractionsPage
        .enterTextInSearchForm(text))
        .getEnteredInFormText()
    ).toBe(text)
  })

  it("should show dropdown with suggestions contains entered text", async () => {
    expect(
      await (await bookingAttractionsPage
        .enterTextInSearchForm("lon"))
        .isSearchDropdownInit()
    ).toBeTruthy()
  })

  it("should show results of searching on dropdown list item click", async () => {
    const bookingAttractionsResultsPage = await (await bookingAttractionsPage
      .enterTextInSearchForm("london"))
      .findAttractionsOnDropdownItemClick()
    expect(
      bookingAttractionsResultsPage.isInitialized()
    ).toBeTruthy()
  })

  it("should show results of searching on button click", async () => {
    const bookingAttractionsResultsPage =  await (await bookingAttractionsPage
      .enterTextInSearchForm("london"))
      .findAttractionsOnClick()
    expect(
      bookingAttractionsResultsPage.isInitialized()
    ).toBeTruthy()
  })
})
