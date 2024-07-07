import React from 'react';
import { Controller } from 'react-hook-form';
import { TextInput, HelperText } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

type TextInputFieldProps = {
    control: any;
    name: string;
    label: string;
    secureTextEntry?: boolean;
    errors: any;
};

const TextInputField: React.FC<TextInputFieldProps> = ({ control, name, label, secureTextEntry, errors }) => {
    return (
        <View style={styles.inputContainer}>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <>
                        <TextInput
                            label={label}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            secureTextEntry={secureTextEntry}
                            style={styles.input}
                        />
                        {errors[name] && <HelperText type="error">{errors[name]?.message}</HelperText>}
                    </>
                )}
                name={name}
                defaultValue=""
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 16,
    },
    input: {
        backgroundColor: 'white',
    },
});

export default TextInputField;
