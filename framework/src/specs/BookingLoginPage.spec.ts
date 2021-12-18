import {WebDriver} from "selenium-webdriver"
import DriverManager from "../driver/DriverManager";
import BookingLoginPage from "../pages/BookingLoginPage";
import BookingHomePage from "../pages/BookingHomePage";

jest.setTimeout(15000)

describe("Booking login page", () => {
  let driver: WebDriver
  let bookingLoginPage: BookingLoginPage

  beforeAll(async () => {
    driver = await DriverManager.getDriver()
  })

  beforeEach(() => {
    bookingLoginPage = new BookingLoginPage(driver).openLoginPage()
  })

  afterAll(async () => {
    await DriverManager.closeDriver()
  })

  it("should be initialized with username input on first step", async () => {
    expect(
      await bookingLoginPage.isUsernameInitialized()
    ).toBeTruthy()
  })

  it("should open password input on success username step", async () => {
    const bookingLoginWithPasswordPage = await bookingLoginPage
      .enterUsername()
      .submitForm() as BookingLoginPage
    expect(
      await bookingLoginWithPasswordPage.isPasswordInitialized()
    ).toBeTruthy()
  })

  it("should open home page with user info on success login steps", async () => {
    const bookingLoginWithPasswordPage = await bookingLoginPage
      .enterUsername()
      .submitForm() as BookingLoginPage
    const bookingHomePageWithUser = await bookingLoginWithPasswordPage
      .enterPassword()
      .submitForm() as BookingHomePage

    expect(
      await bookingHomePageWithUser.isUserInitialized()
    ).toBeTruthy()
  })
})
