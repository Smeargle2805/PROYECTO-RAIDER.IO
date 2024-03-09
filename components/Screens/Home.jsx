import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/Home';
import { Logo } from '../Logo';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Logo />
            <Text style={styles.title}>¡Bienvenido a Raider.io!</Text>
            <Text style={styles.subtitle}>La aplicación definitiva para los aficionados de World of Warcraft</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Busqueda Personaje')}
            >
                <Text style={styles.buttonText}>Comenzar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;