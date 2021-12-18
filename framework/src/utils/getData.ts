import fs from "fs/promises"

const getFilePath = (env: string) => `./resources/${env}.properties`

export async function getData(env: string) {
  const data = await fs.readFile(`${getFilePath(env)}`, 'utf-8')
  return data
    .replace(/\r\n/g, '\n')
    .split('\n')
    .reduce((acc: { [key: string]: string }, prop: string) => {
      const [key, value] = prop.split('=')
      acc[key] = value
      return acc
    }, {})
}
