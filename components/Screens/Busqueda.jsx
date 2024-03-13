// SearchScreen.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { styles, pickerSelectStyles } from '../../styles/Busqueda';
import { Personaje } from '../Logo';

const SearchScreen = ({ navigation }) => {
    const [region, setRegion] = useState('');
    const [realm, setRealm] = useState('');
    const [characterName, setCharacterName] = useState('');

    const handleSearch = () => {
        navigation.navigate('Detalles Personaje', { region, realm, characterName });
    };

    return (
        <View style={styles.container}>
            <Personaje />
            <View style={styles.inputContainer}>
                <Text style={styles.pickerLabel}>Selecciona una Region</Text>
                <RNPickerSelect
                    placeholder={{ label: 'Selecciona una Región', value: null }}
                    onValueChange={(value) => setRegion(value)}
                    items={[
                        { label: 'America y Oceania', value: 'us' },
                        { label: 'Europa', value: 'eu' },
                        { label: 'Taiwan', value: 'tw' },
                        { label: 'Corea', value: 'kr' },
                        { label: 'China', value: 'cn' },
                    ]}
                    style={pickerSelectStyles}
                    value={region}
                />
            </View>
            <Text style={styles.textLabel}>Ingresa un Reino</Text>
            <TextInput
                placeholder="Reino"
                value={realm}
                onChangeText={text => setRealm(text)}
                style={styles.input}
            />
            <Text style={styles.textLabel}>Ingresa un Personaje</Text>
            <TextInput
                placeholder="Nombre del personaje"
                value={characterName}
                onChangeText={text => setCharacterName(text)}
                style={styles.input}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleSearch}
            >
                <Text style={styles.buttonText}>Buscar</Text>
            </TouchableOpacity>
        </View>
    );

};
export default SearchScreen;
