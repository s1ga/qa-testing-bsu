import {By, until, WebDriver} from "selenium-webdriver";
import BaseBookingPage from "./BaseBookingPage";
import {UserCreator} from "../service/UserCreator";
import BookingHomePage from "./BookingHomePage";
import User from "../model/User";

export default class BookingLoginPage extends BaseBookingPage {
  private user: User
  private readonly loginStep: string
  private readonly loginPageUrl: string = "https://account.booking.com/sign-in"
  private readonly emailInputLocator: By = By.xpath("//input[@name='username']")
  private readonly passwordInputLocator: By = By.xpath("//input[@name='password']")
  private readonly submitBtnLocator: By = By.xpath("//button[@type='submit']")

  constructor(driver: WebDriver, step?: string) {
    super(driver)
    this.user = UserCreator.getUser()
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

  public enterUsername(): this {
    return this.enterText(this.emailInputLocator, this.user.getUsername())
  }

  public enterPassword(): this {
    return this.enterText(this.passwordInputLocator, this.user.getPassword())
  }

  public async submitForm(): Promise<BookingLoginPage | BookingHomePage> {
    const btn = await this.findElementByLocator(this.submitBtnLocator)
    await btn.click()

    return this.loginStep === 'password'
      ? new BookingHomePage(this.driver)
      : new BookingLoginPage(this.driver, 'password')
  }
}
