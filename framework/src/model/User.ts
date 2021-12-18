export default class User {
  private username: string
  private password: string

  constructor(username: string, password: string) {
    this.username = username
    this.password = password
  }

  public getPassword(): string {
    return this.password
  }

  public getUsername(): string {
    return this.username
  }

  public setPassword(password: string): this {
    this.password = password
    return this
  }

  public setUsername(username: string): this {
    this.username = username
    return this
  }
}