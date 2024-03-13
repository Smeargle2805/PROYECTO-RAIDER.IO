import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { styles, pickerSelectStyles } from '../../styles/Busqueda';
import { Guild } from '../Logo';

const SearchScreenGuild = ({ navigation }) => {
    const [region, setRegion] = useState('');
    const [realm, setRealm] = useState('');
    const [name, setName] = useState('');

    const handleSearch = () => {
        navigation.navigate('Detalles Guild', { region, realm, name });
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Guild/>
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
            <Text style={styles.textLabel}>Ingresa una Hermandad</Text>
            <TextInput
                placeholder="Nombre de la Hermandad"
                value={name}
                onChangeText={text => setName(text)}
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

export default SearchScreenGuild;