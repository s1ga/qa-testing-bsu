import {Options} from "selenium-webdriver/chrome";
import {Browser, Builder} from "selenium-webdriver";

const optionsFlags = ["--headless", "--no-sandbox", "--disable-dev-shm-usage"]

export const buildChromeDriver = () => new Builder()
  .forBrowser(Browser.CHROME)
  .setChromeOptions(
    new Options()
      .addArguments(...optionsFlags)
  )
  .build()
