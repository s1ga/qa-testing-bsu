export default class SearchForm {
  private destination: string
  private checkIn: string
  private checkOut: string
  private personsNumber: string

  constructor(destination: string, checkIn: string, checkOut: string, personsNumber: string) {
    this.destination = destination
    this.checkIn = checkIn
    this.checkOut = checkOut
    this.personsNumber = personsNumber
  }

  public getDestination(): string {
    return this.destination
  }

  public setDestination(destination): void {
    this.destination = destination
  }

  public getCheckIn(): string {
    return this.checkIn
  }

  public setCheckIn(checkIn: string): void {
    this.checkIn = checkIn
  }

  public getCheckOut(): string {
    return this.checkOut
  }

  public setCheckOut(checkOut: string): void {
    this.checkOut = checkOut
  }

  public getPersonsNumber(): string {
    return this.personsNumber
  }

  public setPersosnNumber(personsNumber: string): void {
    this.personsNumber = personsNumber
  }
}