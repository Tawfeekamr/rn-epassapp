import React, {useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import Navigation from './src/navigation/Navigation';
import {ThemeProvider, useThemeContext} from './src/context/themeContext';
import {LocaleProvider, useLocaleContext} from './src/context/LocaleContext';
import * as SecureStore from 'expo-secure-store';
import {NavigationContainer} from '@react-navigation/native';
import {themes} from './src/theme/theme';
import {registerForPushNotificationsAsync} from './src/services/notificationService';
import * as Notifications from 'expo-notifications';
import {localeMap} from './src/utils/helper'


Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});


const AppContent = () => {
    const {theme, setTheme} = useThemeContext();
    const {changeLocale} = useLocaleContext();

    useEffect(() => {
        const loadUserPreferences = async () => {
            const data = await SecureStore.getItemAsync('user');
            if (data) {
                const user = JSON.parse(data);
                setTheme(user.country as keyof typeof themes);
                changeLocale(localeMap[user.country]);
            }
        };
        loadUserPreferences();
        registerForPushNotificationsAsync().then(token => console.log(token));
    }, [setTheme, changeLocale]);

    return (
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <Navigation/>
            </NavigationContainer>
        </PaperProvider>
    );
};

const App = () => {
    return (
        <LocaleProvider>
            <ThemeProvider>
                <AppContent/>
            </ThemeProvider>
        </LocaleProvider>
    );
};

export default App;
