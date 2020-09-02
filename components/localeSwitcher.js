import React from 'react';
import { useRouter } from 'next/router';
import {
  useI18n, Link,
} from '../lib/i18n';

const TranslationsNeeded = '/components/localeSwitcher';

const localeSwitcher = () => {
  const {
    translations, config,
  } = useI18n(TranslationsNeeded);

  const router = useRouter();

  return (
    <Link href={router.pathname} language={config.prefix === 'en' ? 'nl' : 'en'}>
      <a>
        banana
      </a>
    </Link>
  );
};

export const AllTranslationsNeeded = [
  TranslationsNeeded,
];

export default localeSwitcher;


/*
move back up later?

translations.name

// Flip the flag and its tags according to the current local
var flagsrc = `/static/${dutchFlag ? "netherlands" : "united-kingdom"}-flag-icon-64.png`;
var flagalt = dutchFlag ? "Netherlandse vlag" : "English flag";

const handleLocaleChange = useCallback(e => (setLocale(e)), [router]);
*/
