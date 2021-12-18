import {getData} from "../utils/getData"

export default class DataReader {
  public static async read(key: string) {
    const data = await getData(global.ENV)
    return data[key]
  }
}
