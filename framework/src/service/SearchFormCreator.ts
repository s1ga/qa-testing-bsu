import SearchForm from "../model/SearchForm"
import DataReader from "./DataReader"

export class SearchFormCreator {
  private static readonly destination = 'hotel.search.destination'
  private static readonly checkIn = 'hotel.search.checkIn'
  private static readonly checkOut = 'hotel.search.checkOut'
  private static readonly personsNumber = 'hotel.search.personsNumber'

  public static async getSearchForm(): Promise<SearchForm> {
    return new SearchForm(
      await DataReader.read(this.destination),
      await DataReader.read(this.checkIn),
      await DataReader.read(this.checkOut),
      await DataReader.read(this.personsNumber)
    )
  }
}