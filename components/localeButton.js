import React from 'react';
import Router from 'next/router';
import {
  useI18n,
  getI18nAgnosticPathname,
  setI18nCookie,
  changeDocumentLanguage,
} from '../lib/i18n';

const TranslationsNeeded = '/components/localeButton';

const localeButton = ({ translations }) => {

  const { config } = useI18n(TranslationsNeeded);

  return (
        <>
        <button onClick={() => {
            setI18nCookie(config.prefix === 'en' ? 'nl' : 'en');
            changeDocumentLanguage(config.prefix === 'en' ? 'nl' : 'en');
            Router.push(`/${config.prefix === 'en' ? 'nl' : 'en'}${getI18nAgnosticPathname() || ''}`);
        }}
        type="button" >
        {translations?.name || 'banana'}
        </button>
        </>
  );
};

export const AllTranslationsNeeded = [
  TranslationsNeeded,
];

export default localeButton;
/*
move back up later?


// Flip the flag and its tags according to the current local
var flagsrc = `/static/${dutchFlag ? "netherlands" : "united-kingdom"}-flag-icon-64.png`;
var flagalt = dutchFlag ? "Netherlandse vlag" : "English flag";

const handleLocaleChange = useCallback(e => (setLocale(e)), [router]);
*/
