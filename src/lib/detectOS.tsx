import UAParser from 'ua-parser-js'

export function getOS(userAgent: string) {
  const parser = new UAParser()
  const result = parser.setUA(userAgent).getOS()
  return result.name
}