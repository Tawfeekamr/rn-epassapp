export const localeMap: { [key: string]: string } = {
    AE: 'ar',
    IN: 'en',
    US: 'en',
    JP: 'ja',
};

export const localeMapReverse: { [key: string]: string } = {};
Object.keys(localeMap).forEach(key => {
    const value = localeMap[key];
    localeMapReverse[value] = key;
});

export const getCountryCode = (languageCode: string): string | undefined => {
    return localeMapReverse[languageCode];
};