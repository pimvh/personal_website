// implemented with help from https://w11i.me/how-to-build-multilingual-website-in-next-js

import { defaultLocale, locales } from './config'

export function getInitialLocale(Locale) {
  // preference from the previous session
  const localSetting = localStorage.getItem('locale')

  // console.log('getInitialLocale', localSetting);

  if (localSetting && isLocale(localSetting)) {
    return localSetting
  }

  // the language setting of the browser
  const [browserSetting] = navigator.language.split('-')
  if (isLocale(browserSetting)) {
    return browserSetting
  }

  return defaultLocale
}

function isLocale(tested) {
  return locales.includes(tested);
}
