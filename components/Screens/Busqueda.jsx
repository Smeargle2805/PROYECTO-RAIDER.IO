import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { styles, pickerSelectStyles } from '../../styles/Busqueda';
import { Personaje } from '../Logo';
import LocationComponent from '../GPS';

const SearchScreen = ({ navigation }) => {
  const [region, setRegion] = useState('');
  const [realm, setRealm] = useState('');
  const [characterName, setCharacterName] = useState('');
  const [locationLoaded, setLocationLoaded] = useState(false);


  const handleSearch = () => {
    navigation.navigate('Detalles Personaje', { region, realm, characterName });
    setRealm('');
    setCharacterName('');
  };

  const handleLocationChange = (coords) => {
    const { latitude, longitude } = coords;
    const newRegion = getRegion(latitude, longitude);
    setRegion(newRegion);
    setLocationLoaded(true);
  };

  const getRegion = (latitude, longitude) => {
    if (latitude > 0) {
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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLocationLoaded(true);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Personaje />
        <View style={styles.inputContainer}>
          <Text style={styles.pickerLabel}>Selecciona una Región</Text>
          <LocationComponent onLocationChange={handleLocationChange} />
          {locationLoaded ? (
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
          ) : (
            <Text>Cargando ubicación...</Text>
          )}
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
