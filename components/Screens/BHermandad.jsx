import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
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
                placeholder="Nombre de la Hermandad"
                value={name}
                onChangeText={text => setName(text)}
                style={styles.input}
            />
            <Button
                style={styles.button}
                title="Buscar"
                onPress={handleSearch} />
        </View>
    );

};

export default SearchScreenGuild;