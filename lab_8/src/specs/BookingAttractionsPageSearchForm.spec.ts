import BookingHomePage from "../pages/BookingHomePage"
import {Browser, Builder, WebDriver} from "selenium-webdriver";
import BookingAttractionsPage from "../pages/BookingAttractionsPage";

jest.setTimeout(15000);

describe("Booking attractions page", () => {
  let driver: WebDriver
  let bookingAttractionsPage: BookingAttractionsPage

  beforeAll(() => {
    driver = new Builder().forBrowser(Browser.CHROME).build()
  })

  beforeEach(() => {
    bookingAttractionsPage = new BookingHomePage(driver)
      .openHomePage()
      .openAttractionsPage()
  })

  afterAll(async () => {
    await driver.quit()
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
});
