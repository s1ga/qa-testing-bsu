export default class Hotel {
  private title: string
  private isSaved: boolean
  private listName: string

  constructor(title: string, isSaved: boolean, listName?: string) {
    this.title = title
    this.isSaved = isSaved
    this.listName = listName
  }

  public getTitle(): string {
    return this.title
  }

  public setTitle(title: string): void {
    this.title = title
  }

  public getIsSaved(): boolean {
    return this.isSaved
  }

  public setIsSaved(isSaved: boolean): void {
    this.isSaved = isSaved
  }

  public getListName(): string {
    return this.listName
  }

  public setListName(listName: string): void {
    this.listName = listName
  }
}