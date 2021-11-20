import BookingHomePage from "../pages/BookingHomePage"
import {WebDriver} from "selenium-webdriver"
import BookingAttractionsPage from "../pages/BookingAttractionsPage"
import {buildChromeDriver} from "../utils"

jest.setTimeout(15000)

describe("Booking attractions page", () => {
  let driver: WebDriver
  let bookingAttractionsPage: BookingAttractionsPage

  beforeAll(() => {
    driver = buildChromeDriver()
  })

  beforeEach(() => {
    bookingAttractionsPage = new BookingHomePage(driver)
      .openHomePage()
      .openAttractionsPage()
  })

  afterAll(async () => {
    await driver.quit()
  })

  it("should contain entered text", async () => {
    const text = "lon"
    expect(
      await bookingAttractionsPage
        .enterTextInSearchForm(text)
        .getEnteredInFormText()
    ).toBe(text)
  })

  it("should show dropdown with suggestions contains entered text", async () => {
    expect(
      await bookingAttractionsPage
        .enterTextInSearchForm("lon")
        .isSearchDropdownInit()
    ).toBeTruthy()
  })

  it("should show results of searching on dropdown list item click", async () => {
    expect(
      await bookingAttractionsPage
        .enterTextInSearchForm("london")
        .findAttractionsOnDropdownItemClick()
        .isInitialized()
    ).toBeTruthy()
  })

  it("should show results of searching on button click", async () => {
    expect(
      await bookingAttractionsPage
        .enterTextInSearchForm("london")
        .findAttractionsOnClick()
        .isInitialized()
    ).toBeTruthy()
  })
})
