import React, {createContext, ReactNode, useContext, useState} from 'react';
import {IntlProvider} from 'react-intl';
import enMessages from '../../src/localization/en.json';
import arMessages from '../../src/localization/ar.json';
import jaMessages from '../../src/localization/ja.json';
import hiMessages from '../../src/localization/hi.json';
import {LocaleContextType} from "../@types/types";


const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const LocaleProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [locale, setLocale] = useState('en');
    const [messages, setMessages] = useState(enMessages);

    const changeLocale = (newLocale: string) => {
        setLocale(newLocale);
        switch (newLocale) {
            case 'ar':
                setMessages(arMessages);
                break;
            case 'ja':
                setMessages(jaMessages);
                break;
            case 'hi':
                setMessages(hiMessages);
                break;
            default:
                setMessages(enMessages);
                break;
        }
    };

    return (
        <LocaleContext.Provider value={{locale, changeLocale}}>
            <IntlProvider locale={locale} messages={messages}>
                {children}
            </IntlProvider>
        </LocaleContext.Provider>
    );
};

export const useLocaleContext = (): LocaleContextType => {
    const context = useContext(LocaleContext);
    if (!context) {
        throw new Error('useLocaleContext must be used within a LocaleProvider');
    }
    return context;
};
