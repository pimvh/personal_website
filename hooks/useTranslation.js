import { useContext } from 'react'
import { LocaleContext } from '../context/localeContext'
import { defaultLocale } from '../lib/translations/config'
import { Strings } from '../pagecontent/strings'

export default function useTranslation() {
    const { locale } = useContext(LocaleContext);

    // console.log('translation locale', locale);

    function translate(key) {
        if (!Strings[key][locale]) {
            console.warn(`Translation '${key}' for locale '${locale}' not found.`)
        }

        return Strings[key][locale] || Strings[key][defaultLocale] || ''
    }

    return {
        translate,
        locale
    }
}
