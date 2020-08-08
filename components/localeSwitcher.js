import React, { useCallback, useContext} from 'react'
import { useRouter } from 'next/router'
import { locales, languageNames } from '../lib/translations/config'
import { LocaleContext } from '../context/localeContext'

export default function LocaleSwitcher ({ lang }) {
    const router = useRouter();
    const { locale, switchtolocale } = useContext(LocaleContext);

    // Flip the image of the flag to the current local
    var [dutchFlag, setFlag] = React.useState(false);

    var newlocal = !dutchFlag ? "nl" : "en";

    // Flip the flag and its tags according to the current local
    var flagsrc = `/static/${dutchFlag ? "netherlands" : "united-kingdom"}-flag-icon-64.png`;
    var flagalt = dutchFlag ? "Netherlandse vlag" : "English flag";

    const handleLocaleChange = useCallback(e => (setLoc(e)), [router]);

    function setLoc(e) {
        setFlag(!dutchFlag);
        const regex = new RegExp(`^/(${locales.join('|')})`);

        router.push(router.pathname,
                    router.asPath.replace(regex, `/${newlocal}`));
    };

    // <select value={locale} onChange={handleLocaleChange}>
    //   {locales.map(locale => (
    //     <option key={locale} value={locale}>
    //       {languageNames[locale]}
    //     </option>
    //   ))}
    // </select>
    //
    return (
        <div>
        {/* some code to swap flag */}

        <img onClick={handleLocaleChange}
         src={flagsrc} alt={flagalt} className="flag" />
        </div>
    );


}
