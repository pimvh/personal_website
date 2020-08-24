import { locales } from './config'

export function isLocale(tested) {
  return locales.includes(tested)
}
