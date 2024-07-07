import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import {useTranslation} from 'react-i18next';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {Button, Text, useTheme} from 'react-native-paper';

const HomeScreen = () => {
    const {t} = useTranslation();
    const navigation = useNavigation<StackNavigationProp<any>>();
    const [userData, setUserData] = React.useState<any>({});
    const theme = useTheme();

    React.useEffect(() => {
        const loadData = async () => {
            const data = await SecureStore.getItemAsync('user');
            if (data) {
                const user = JSON.parse(data);
                setUserData(user);
            }
        };

        loadData();
    }, []);

    const logout = async () => {
        await SecureStore.deleteItemAsync('user');
        navigation.navigate('Login');
    };

    return (
        <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
            <Text style={{color: theme.colors.primary}}>{t('home')}</Text>
            <Text>{JSON.stringify(userData, null, 2)}</Text>
            <Button mode="contained" onPress={logout}>{t('logout')}</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default HomeScreen;
