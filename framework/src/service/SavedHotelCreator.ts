import Hotel from "../model/Hotel"

export default class SavedHotelCreator {
  private static title: string
  private static isSaved: boolean
  private static listName: string

  public static setHotel(title: string, isSaved: boolean, listName: string): Hotel {
    this.title = title
    this.isSaved = isSaved
    this.listName = listName

    return this.getHotel()
  }

  public static getHotel(): Hotel {
    return new Hotel(this.title, this.isSaved, this.listName)
  }
}