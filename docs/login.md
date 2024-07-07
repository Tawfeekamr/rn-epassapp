# Login Component Documentation

## Description

`LoginForm` is a React functional component designed for user authentication within a React Native application. It utilizes various hooks and libraries to handle form validation, theme and locale management, and secure storage. The component supports dynamic locale and theme changes based on the selected country.

## Dependencies

- **react-native**: For building mobile applications using React.
- **react-hook-form**: For handling form state and validation.
- **@hookform/resolvers/yup**: For integrating Yup validation schema with React Hook Form.
- **expo-secure-store**: For secure storage of sensitive data.
- **react-native-paper**: For UI components.
- **expo-notifications**: For handling notifications.
- **yup**: For form validation schema.
- **react-intl**: For internationalization.

## Props

The `LoginForm` component does not accept any props.

## State

- `selectedCountry` (string): Holds the currently selected country code. Defaults to `'AE'`.

## Context

- **useThemeContext**: Provides theme management functionalities.
- **useLocaleContext**: Provides locale management functionalities.

## Hooks

- **useForm**: Manages form state and validation.
- **useEffect**: Handles side effects, specifically changing locale and theme based on the selected country.
- **useNavigation**: Provides navigation functionalities.
- **useIntl**: Provides internationalization functionalities.

## Functions

### Validation Schema

The component uses Yup for form validation. The validation schema includes:
- `username`: Dynamic validation based on the selected country.
- `password`: Minimum length of 6 characters.
- `email`: Valid email format.

### sendNotification

An asynchronous function that schedules a notification when the selected country changes.

### onSubmit

An asynchronous function that handles form submission. It saves the user data securely and navigates to the Home screen.

## Usage

### Example

```jsx
import React from 'react';
import { LoginForm } from './path/to/LoginForm';

const App = () => {
    return (
        <LoginForm />
    );
};

export default App;
```

### Description of Fields

- **Username**: User's username. Validation varies based on the selected country.
- **Email**: User's email address. Must be a valid email format.
- **Password**: User's password. Minimum of 6 characters.
- **Country Picker**: Allows the user to select a country, which dynamically changes the locale and theme.

### Styling

The component uses `StyleSheet.create` for defining styles. Key styles include:

- `container`: Flex container to occupy the full screen.
- `inner`: Inner view with centered content and horizontal padding.
- `title`: Large, centered title text.
- `submitButton`: Submit button with custom font size and padding.

## Additional Information

### Locale Map

A mapping of country codes to locale strings:

```jsx
const localeMap = {
    AE: 'ar',
    IN: 'hi',
    US: 'en',
    JP: 'ja',
};
```

### Secure Storage

The component uses `expo-secure-store` to securely store user data, including the selected country.

### Notifications

The component uses `expo-notifications` to send a notification when the selected country changes, indicating the language has changed.

## Conclusion

`LoginForm` is a comprehensive component for handling user login with dynamic locale and theme management. It leverages React Native's ecosystem to provide a secure, validated, and user-friendly authentication experience.
