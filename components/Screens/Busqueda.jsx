// SearchScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
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
                <RNPickerSelect
                    placeholder={{ label: 'Selecciona una Región', value: null }}
                    onValueChange={(value) => setRegion(value)}
                    items={[
                        { label: 'America', value: 'us' },
                        { label: 'Europa', value: 'eu' },
                        { label: 'Taiwan', value: 'tw' },
                        { label: 'Corea', value: 'kr' },
                        { label: 'China', value: 'cn' },
                    ]}
                    style={pickerSelectStyles}
                    value={region}
                />
            </View>
            <TextInput
                placeholder="Reino"
                value={realm}
                onChangeText={text => setRealm(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Nombre del personaje"
                value={characterName}
                onChangeText={text => setCharacterName(text)}
                style={styles.input}
            />
            <Button
                style={styles.button}
                title="Buscar"
                onPress={handleSearch} />
        </View>
    );

};
export default SearchScreen;
