import React, {useState} from 'react';
import {FlatList, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CountrySupport} from "../@types/types";


type Props = {
    selectedCountry: string;
    setSelectedCountry: (value: string) => void;
};

const supportedCountries: CountrySupport[] = [
    {code: 'AE', name: 'United Arab Emirates'},
    {code: 'IN', name: 'India'},
    {code: 'US', name: 'United States'},
    {code: 'JP', name: 'Japan'},
];

const CountryPickerComponent: React.FC<Props> = ({selectedCountry, setSelectedCountry}) => {
    const [visible, setVisible] = useState(false);

    const openPicker = () => setVisible(true);
    const closePicker = () => setVisible(false);

    const renderItem = ({item}: { item: CountrySupport }) => (
        <TouchableOpacity
            style={styles.countryItem}
            onPress={() => {
                setSelectedCountry(item.code);
                closePicker();
            }}
        >
            <Text>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View>
            <TouchableOpacity
                onPress={openPicker}
                activeOpacity={0.7} // Adjust opacity here
                style={styles.pickerButton}
            >
                <Text style={styles.pickerButtonText}>
                    {supportedCountries.find(country => country.code === selectedCountry)?.name || 'Select Country'}
                </Text>
            </TouchableOpacity>

            <Modal visible={visible} transparent={true}>
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <FlatList
                            data={supportedCountries}
                            renderItem={renderItem}
                            keyExtractor={item => item.code}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    pickerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        backgroundColor: 'white',
        marginBottom: 16,
    },
    pickerButtonText: {
        fontSize: 18,
        marginLeft: 8,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
    },
    countryItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default CountryPickerComponent;
