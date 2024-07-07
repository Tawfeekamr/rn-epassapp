import React, {useEffect, useState} from 'react';
import {Alert, KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as SecureStore from 'expo-secure-store';
import {Button, Title} from 'react-native-paper';
import {useThemeContext} from '../context/themeContext';
import {useLocaleContext} from '../context/LocaleContext';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {useIntl} from 'react-intl';
import TextInputField from './TextInputField';
import CountryPickerComponent from './CountryPicker';
import * as Notifications from 'expo-notifications';
import {themes} from '../theme/theme';
import {getUsernameValidationSchema} from "../utils/usernameValidationSchema";
import * as yup from 'yup';
import {FormDataType} from "../@types/types";


const localeMap: { [key: string]: string } = {
    AE: 'ar',
    IN: 'hi',
    US: 'en',
    JP: 'ja',
};

const LoginForm: React.FC = () => {
    const { changeLocale} = useLocaleContext();
    const navigation = useNavigation<StackNavigationProp<any>>();
    const intl = useIntl();
    const [selectedCountry, setSelectedCountry] = useState('AE');
    const {theme, setTheme} = useThemeContext();

    const validationSchema = yup.object().shape({
        username: getUsernameValidationSchema(intl)[selectedCountry],
        password: yup.string().min(6).required(intl.formatMessage({id: 'password_required'})),
        email: yup.string().email().required(intl.formatMessage({id: 'email_required'})),
    });

    const {control, handleSubmit, formState: {errors}} = useForm<FormDataType>({
        resolver: yupResolver(validationSchema),
    });

    useEffect(() => {
        changeLocale(localeMap[selectedCountry]);
        setTheme(selectedCountry as keyof typeof themes);
        sendNotification().then(r => console.debug(r));
    }, [selectedCountry]);

    const sendNotification = async () => {
        await Notifications.scheduleNotificationAsync({
            content: {
                title: intl.formatMessage({id: 'language_changed'}),
                body: intl.formatMessage({id: 'language_changed_body'}),
            },
            trigger: null,
        });
    };

    const onSubmit = async (data: FormDataType) => {
        try {
            await SecureStore.setItemAsync('user', JSON.stringify({...data, country: selectedCountry}));
            navigation.navigate('Home');
        } catch (e) {
            Alert.alert(intl.formatMessage({id: 'error'}), intl.formatMessage({id: 'save_error'}));
        }
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <View style={styles.inner}>
                <Title style={styles.title}>{intl.formatMessage({id: 'login'})}</Title>
                <TextInputField
                    control={control}
                    name="username"
                    label={intl.formatMessage({id: 'username'})}
                    errors={errors}
                />
                <TextInputField
                    control={control}
                    name="email"
                    label={intl.formatMessage({id: 'email'})}
                    errors={errors}
                />
                <TextInputField
                    control={control}
                    name="password"
                    label={intl.formatMessage({id: 'password'})}
                    secureTextEntry
                    errors={errors}
                />
                <CountryPickerComponent
                    selectedCountry={selectedCountry}
                    setSelectedCountry={setSelectedCountry}
                />
                <Button labelStyle={theme?.dark && {color: theme.colors.accent}} mode="contained"
                        onPress={handleSubmit(onSubmit)} style={styles.submitButton}>
                    {intl.formatMessage({id: 'submit'})}
                </Button>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 32,
        marginBottom: 24,
        textAlign: 'center',
    },
    submitButton: {
        fontSize: 18,
        paddingVertical: 10,
    },
});

export default LoginForm;
