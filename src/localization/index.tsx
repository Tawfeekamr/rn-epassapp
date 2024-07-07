import React, { ReactNode } from 'react';
import * as Localization from 'expo-localization';
import { I18nManager } from 'react-native';
import { IntlProvider } from 'react-intl';

import en from './en.json';
import ar from './ar.json';
import hi from './hi.json';

const messages = {
    en,
    ar,
    hi,
};

const locales = Localization.getLocales();
const primaryLocale = locales[0]?.languageTag.split('-')[0] || 'en';
const rtlLanguages = ['ar', 'he', 'fa', 'ur'];

const isRTL = rtlLanguages.includes(primaryLocale);
I18nManager.forceRTL(isRTL);

type Props = {
    children: ReactNode;
};

export const LocalizationProvider: React.FC<Props> = ({ children }) => (
    <IntlProvider locale={primaryLocale} messages={messages[primaryLocale]}>
        {children}
    </IntlProvider>
);
