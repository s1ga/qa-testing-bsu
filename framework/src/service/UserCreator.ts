import {getDataFromEnv} from "../utils/ReadDataFromEnv";
import User from "../model/User";

export class UserCreator {
  private static readonly username = 'userName'
  private static readonly password = 'userPassword'

  public static getUser(): User {
    return new User(
      getDataFromEnv(this.username),
      getDataFromEnv(this.password)
    )
  }
}
