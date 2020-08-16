// implemented with help from https://w11i.me/how-to-build-multilingual-website-in-next-js
import { useEffect } from 'react';
import { defaultLocale, locales } from './config';
import isLocale from "./isLocale";
import { LocaleContext } from '../../context/localeContext';

export default function getInitialLocale(Locale) {
    // preference from the previous session

    const localSetting = localStorage.getItem('locale');


    if (localSetting && isLocale(localSetting)) {

      return localSetting;
    }

    // the language setting of the browser
    const [browserSetting] = navigator.language.split('-');
    if (isLocale(browserSetting)) {

        return browserSetting;
    }

    return defaultLocale;
}
