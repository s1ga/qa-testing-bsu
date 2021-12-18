import {environment as devEnv} from "../env/env.dev";
import {environment as qaEnv} from "../env/env.qa";

let env = 'dev'

export function getDataFromEnv(prop: string) {
  switch (env) {
    case 'dev':
      return devEnv[prop]
    case 'qa':
      return qaEnv[prop]
    default:
      throw new Error("There are no such environment")
  }
}
