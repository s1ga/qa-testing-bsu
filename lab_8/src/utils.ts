import {Options} from "selenium-webdriver/chrome";
import {Browser, Builder} from "selenium-webdriver";

const optionsFlags = [
  "--headless",
  "--no-sandbox",
  "--disable-dev-shm-usage",
  "--user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36"
]

export const buildChromeDriver = () => new Builder()
  .forBrowser(Browser.CHROME)
  .setChromeOptions(
    new Options()
      .addArguments(...optionsFlags)
  )
  .build()
