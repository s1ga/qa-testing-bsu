import {By, WebDriver} from "selenium-webdriver"
import BaseBookingPage from "./BaseBookingPage"
import {UserCreator} from "../service/UserCreator"
import BookingHomePage from "./BookingHomePage"
import {logger} from "../utils/logger";

export default class BookingLoginPage extends BaseBookingPage {
  private readonly loginStep: string
  private readonly loginPageUrl: string = "https://account.booking.com/sign-in"
  private readonly emailInputLocator: By = By.xpath("//input[@name='username']")
  private readonly passwordInputLocator: By = By.xpath("//input[@name='password']")
  private readonly submitBtnLocator: By = By.xpath("//button[@type='submit']")

  constructor(driver: WebDriver, step?: string) {
    super(driver)
    this.loginStep = step
  }

  public openLoginPage(): this {
    (async () => {
      await this.driver.get(this.loginPageUrl)
    })()

    return this
  }

  public isUsernameInitialized(): Promise<boolean> {
    return super.isInitialized(this.emailInputLocator)
  }

  public isPasswordInitialized(): Promise<boolean> {
    return super.isInitialized(this.emailInputLocator)
  }

  public async enterUsername(userNumber: number = 1): Promise<this> {
    const user = await UserCreator.getUser(userNumber)
    return this.enterText(this.emailInputLocator, user.getUsername())
  }

  public async enterPassword(userNumber: number = 1): Promise<this> {
    const user = await UserCreator.getUser(userNumber)
    return this.enterTextToInteractableEl(this.passwordInputLocator, user.getPassword())
  }

  public async submitForm(): Promise<BookingLoginPage | BookingHomePage> {
    const btn = await this.findElementByLocator(this.submitBtnLocator)
    await btn.click()

    return this.loginStep === 'password'
      ? new BookingHomePage(this.driver)
      : new BookingLoginPage(this.driver, 'password')
  }

  public async login(userNumber: number): Promise<BookingHomePage> {
    const bookingLoginPageWithPassword = await (await this
      .openLoginPage()
      .enterUsername(userNumber))
      .submitForm() as BookingLoginPage

    logger.info("Logged in")
    return (await bookingLoginPageWithPassword
      .enterPassword(userNumber))
      .submitForm() as Promise<BookingHomePage>
  }
}
