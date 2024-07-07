import {themes} from "../theme/theme";

export type Country = {
    code: string;
    label: string;
    flag: string;
};

export type CountrySupport = {
    code: string;
    name: string;
};

export type ThemeContextType = {
    theme: typeof themes.UAE;
    setTheme: (theme: keyof typeof themes) => void;
};

export type LocaleContextType = {
    locale: string;
    changeLocale: (newLocale: string) => void;
};

export type TextInputFieldProps = {
    control: any;
    name: string;
    label: string;
    secureTextEntry?: boolean;
    errors: any;
};


export type FormDataType = {
    username: string;
    password: string;
    email: string;
    country: string;
};
