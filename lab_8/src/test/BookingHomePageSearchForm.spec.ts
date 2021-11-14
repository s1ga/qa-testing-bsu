import BookingHomePage from "../pages/BookingHomePage"
import {Browser, Builder} from "selenium-webdriver";

describe('Booking home page', () => {
  let bookingHomePage: BookingHomePage

  beforeEach(() => {
    bookingHomePage = new BookingHomePage(new Builder().forBrowser(Browser.CHROME).build())
  })

  it('should be initialized', () => {
    return expect(
      bookingHomePage
        .openHomePage()
        .isInitialized()
    ).toBeTruthy()
  })
})
