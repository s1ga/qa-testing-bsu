import {WebDriver} from "selenium-webdriver"
import DriverManager from "../driver/DriverManager"
import BookingLoginPage from "../pages/BookingLoginPage"
import BookingHotelsSearchResultPage from "../pages/BookingHotelsSearchResultPage"
import BookingHomePage from "../pages/BookingHomePage"
import Hotel from "../model/Hotel"

describe("Hotel ", () => {
  let driver: WebDriver
  let bookingHomePage: BookingHomePage
  let bookingHotelsSearchResultPage: BookingHotelsSearchResultPage
  let hotel: Hotel

  beforeAll(async () => {
    driver = await DriverManager.getDriver()

    bookingHomePage = await new BookingLoginPage(driver).login(4)
    bookingHotelsSearchResultPage = await bookingHomePage.sendHotelSearchForm()
    hotel = await bookingHotelsSearchResultPage.addHotelToSavedList()
  })

  afterAll(async () => {
    await (await (await bookingHomePage
      .openHomePage()
      .openSavedListPage())
      .openSavedList(hotel.getListName()))
      .removeHotelFromList(hotel.getTitle())
    await DriverManager.closeDriver()
  })

  it("should be added to saved list on like button click on hotel card", async () => {
    expect(
      await bookingHotelsSearchResultPage
        .isHotelAddedToSavedList()
    ).toBeTruthy()
  })

  it("should be showed in saved list", async () => {
    const bookingSavedListPage = await (await bookingHomePage
      .openHomePage()
      .openSavedListPage())
      .openSavedList(hotel.getListName())

    expect(
      await bookingSavedListPage.isHotelExists(hotel.getTitle())
    ).toBeTruthy()
  })
})
