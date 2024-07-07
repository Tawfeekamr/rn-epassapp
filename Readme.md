# ePassApp Documentation

## Overview

ePassApp is a React Native application designed to provide a seamless user experience for managing user authentication
and localization. The app supports dynamic locale and theme changes, secure data storage, and notifications.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Dependencies](#dependencies)
3. [Scripts](#scripts)
4. [Project Structure](#project-structure)
5. [Configuration](#configuration)
6. [Components](#components)
7. [Contexts](#contexts)
8. [Forms](#forms)

## Getting Started

To get started with ePassApp, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Tawfeekamr/rn-epassapp.git
   cd epassapp
   ```

2. **Install dependencies:**
   ```sh
   yarn install
   ```

3. **Start the app:**
   ```sh
   yarn start
   ```

   You can also start the app on specific platforms:
    - Android: `npm run android`
    - iOS: `npm run ios`
    - Web: `npm run web`

## Dependencies

ePassApp relies on several key dependencies for its functionality:

- **React Native**: Framework for building native apps using React.
- **React Navigation**: Navigation library for React Native.
- **Expo**: Framework and platform for universal React applications.
- **react-hook-form**: Library for managing form state and validation.
- **yup**: Schema builder for form validation.
- **expo-secure-store**: Secure storage for sensitive data.
- **expo-notifications**: Notifications API for handling local and push notifications.
- **react-intl**: Internationalization library.

### Full List of Dependencies

```json
"dependencies": {
"@hookform/resolvers": "^3.8.0",
"@react-navigation/native": "^6.1.17",
"@react-navigation/native-stack": "^6.10.0",
"@react-navigation/stack": "^6.4.0",
"axios": "^1.7.2",
"expo": "~51.0.18",
"expo-localization": "~15.0.3",
"expo-notifications": "~0.28.9",
"expo-secure-store": "~13.0.2",
"expo-status-bar": "~1.12.1",
"i18next": "^23.11.5",
"react": "18.2.0",
"react-hook-form": "^7.52.1",
"react-i18next": "^14.1.2",
"react-intl": "^6.6.8",
"react-native": "0.74.3",
"react-native-country-codes-picker": "^2.3.5",
"react-native-gesture-handler": "^2.17.1",
"react-native-localize": "^3.2.0",
"react-native-paper": "^5.12.3",
"react-native-picker-select": "^9.1.3",
"react-native-push-notification": "^8.1.1",
"react-native-safe-area-context": "^4.10.7",
"react-native-screens": "^3.32.0",
"react-native-svg": "^15.3.0",
"react-native-vector-icons": "^10.1.0",
"yup": "^1.4.0"
}
```

### DevDependencies

```json
"devDependencies": {
"@babel/core": "^7.20.0",
"@testing-library/react-native": "^12.5.1",
"@types/jest": "^29.5.12",
"@types/react": "~18.2.45",
"@types/react-native-vector-icons": "^6.4.18",
"jest": "^29.7.0",
"jest-expo": "^51.0.3",
"typescript": "^5.1.3"
}
```

## Scripts

The `package.json` file includes several scripts for running and testing the app:

```json
"scripts": {
"start": "expo start",
"android": "expo start --android",
"ios": "expo start --ios",
"test": "jest",
"web": "expo start --web"
}
```

## Project Structure

```
ePassApp/
├── assets/
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash.png
├── components/
│   ├── TextInputField.tsx
│   ├── CountryPickerComponent.tsx
│   └── LoginForm.tsx
├── context/
│   ├── ThemeContext.tsx
│   └── LocaleContext.tsx
├── utils/
│   └── usernameValidationSchema.ts
├── App.tsx
├── app.json
├── babel.config.js
├── jest.config.js
├── package.json
├── tsconfig.json
└── yarn.lock
```

### Components

- **LoginForm**: Main component for user authentication.
- **TextInputField**: Custom text input field component.
- **CountryPickerComponent**: Component for selecting the country.

### Contexts

- **ThemeContext**: Manages the theme of the application.
- **LocaleContext**: Manages the localization of the application.

### Forms

- **usernameValidationSchema**: Validation schema for the username field based on the selected country.

## Configuration

### app.json

```json
{
  "expo": {
    "name": "ePassApp",
    "slug": "ePassApp",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true,
      "useNextNotificationsApi": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "useNextNotificationsApi": true
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "your-project-id"
      }
    },
    "plugins": [
      "expo-secure-store",
      "expo-localization"
    ]
  }
}
```

## Conclusion

ePassApp is a robust and flexible application designed for user authentication and localization in a React Native
environment. By leveraging the power of Expo and various other libraries, it provides a seamless and secure user
experience. This documentation serves as a comprehensive guide to understanding and working with the ePassApp project.
