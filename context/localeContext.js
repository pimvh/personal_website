import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import { Locale, isLocale } from '../lib/translations/types'

export const LocaleContext = React.createContext({
    locale: 'en',
    setLocale: () => null
});

export function LocaleProvider ({lang,  children}) {

    const [locale, setLocale] = useState(lang)
    const { query } = useRouter()

    // store the preference
    useEffect(() => {
        if (locale !== localStorage.getItem('locale')) {
            localStorage.setItem('locale', locale);
        }
    }, [locale])

    // sync locale value on client-side route changes
    useEffect(() => {
        if (typeof query.lang === 'string' && isLocale(query.lang) && locale !== query.lang) {

            setLocale(query.lang);
        }
    }, [query.lang, locale])

    return (<LocaleContext.Provider value={{locale, setLocale}}>
                {children}
            </LocaleContext.Provider>);
};
