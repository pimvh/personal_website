import React, { useCallback, useContext} from 'react'
import { useRouter } from 'next/router'
import { locales, languageNames } from '../lib/translations/config'
import { LocaleContext } from '../context/localeContext'

export default function LocaleSwitcher () {

    const router = useRouter();

    var { locale } = useContext(LocaleContext);

    let newlocalefunc = (locale) => {

        if (locale == 'en') {
            return 'nl'
        }
        return 'en'
    }

    var newlocale = newlocalefunc(locale);

    // Flip the image of the flag to the current local
    var [dutchFlag, setFlag] = React.useState(true);

    // Flip the flag and its tags according to the current local
    var flagsrc = `/static/${dutchFlag ? "netherlands" : "united-kingdom"}-flag-icon-64.png`;
    var flagalt = dutchFlag ? "Netherlandse vlag" : "English flag";

    const handleLocaleChange = useCallback(e => (setLocale(e)), [router]);

    function setLocale(e) {

        setFlag(true);
        const regex = new RegExp(`^/(${locales.join('|')})`);

        router.push(router.pathname, router.asPath.replace(regex, `/${newlocale}`));
    };

    return (
        <div>
        <img onClick={handleLocaleChange}
         src={flagsrc} alt={flagalt} className="flag" />

        </div>
    );


}
