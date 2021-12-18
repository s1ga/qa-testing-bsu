import User from "../model/User"
import DataReader from "./DataReader"

export class UserCreator {
  private static readonly username = 'user.username'
  private static readonly password = 'user.password'

  public static async getUser(number: number = 1): Promise<User> {
    return new User(
      await DataReader.read(`${this.username}${number}`),
      await DataReader.read(`${this.password}${number}`)
    )
  }
}
