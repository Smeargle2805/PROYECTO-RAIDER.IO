import React from 'react';
import { Text, View, TouchableOpacity, Linking } from 'react-native';
import { styles } from '../../styles/Home';
import { Logo } from '../Logo';

const Home = ({ navigation }) => {

    const abrirNavegador = () => {
        Linking.openURL('https://raider.io/?refresh=1624947498804');
    };

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
            <TouchableOpacity
                style={styles.hyperlink}
                onPress={abrirNavegador}
            >
                <Text style={styles.hyperlinkText}>Ir a la Web</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;