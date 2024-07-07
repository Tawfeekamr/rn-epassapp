import { DefaultTheme, MD3DarkTheme } from 'react-native-paper';

export const themes = {
    AE: {
        ...DefaultTheme,
        dark:false,
        colors: {
            ...DefaultTheme.colors,
            primary: '#00732F',
            accent: '#000000',
            background: '#FFFFFF',
            surface: '#FF0000',
        },
    },
    IN: {
        ...DefaultTheme,
        dark:false,
        colors: {
            ...DefaultTheme.colors,
            primary: '#FF9933',
            accent: '#FFFFFF',
            surface: '#138808',
        },
    },
    US: {
        ...DefaultTheme,
        dark:false,
        colors: {
            ...DefaultTheme.colors,
            primary: '#3C3B6E',
            accent: '#FFFFFF',
            surface: '#FF0000',
        },
    },
    JP: {
        ...DefaultTheme,
        dark:false,
        colors: {
            ...DefaultTheme.colors,
            primary: '#BC002D',
            accent: '#FFFFFF',
            background: '#FFFFFF',
            surface: '#BC002D',
        },
    },
    Dark: {
        ...MD3DarkTheme,
        dark:true,
        colors: {
            ...MD3DarkTheme.colors,
            primary: '#1f1f1f',
            accent: '#e91e63',
            background: '#121212',
            surface: '#373737',
        },
    },
};
