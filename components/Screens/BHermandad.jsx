import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { styles, pickerSelectStyles } from '../../styles/Busqueda';
import { Guild } from '../Logo';
import LocationComponent from '../GPS';

const SearchScreenGuild = ({ navigation }) => {
  const [region, setRegion] = useState('');
  const [realm, setRealm] = useState('');
  const [name, setName] = useState('');

  const handleSearch = () => {
    navigation.navigate('Detalles Hermandad', { region, realm, name });
    setRealm('');
    setName('');
  };

  const handleLocationChange = (coords) => {
    const { latitude, longitude } = coords;
    const newRegion = getRegion(latitude, longitude);
    setRegion(newRegion);
  };

  const getRegion = (latitude, longitude) => {
    if (latitude >= -56.0 && latitude <= 71.357 && longitude >= -180.0 && longitude <= -25.0) {
      return 'us';
    } else if (latitude >= 21.807 && latitude <= 25.621 && longitude >= 118.211 && longitude <= 122.036) {
      return 'tw';
    } else if (latitude >= 33.0041 && latitude <= 38.6239 && longitude >= 125.8875 && longitude <= 129.5843) {
      return 'kr';
    } else if (latitude >= 35.282 && latitude <= 71.357 && longitude >= -25.0 && longitude <= 40.0) {
      return 'eu';
    } else if (latitude >= 18.153 && latitude <= 53.560 && longitude >= 73.499 && longitude <= 134.775) {
      return 'cn';
    } else {
      return '';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Guild />
        <Text style={styles.pickerLabel}>Selecciona una Region</Text>
        <LocationComponent onLocationChange={handleLocationChange} />
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