import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../styles/TopGuilds';
import { alerta } from '../../styles/TopGuilds';

const RaidRankings = () => {
    const [raid, setRaid] = useState('');
    const [region, setRegion] = useState('');
    const [guilds, setGuilds] = useState([]);
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchGuilds = async () => {
            if (!region || !raid) {
                setIsLoading(false);
                return;
            }
            try {
                const response = await axios.get(
                    'https://raider.io/api/v1/raiding/raid-rankings',
                    {
                        params: {
                            raid,
                            region,
                            difficulty: 'mythic',
                            limit: 10,
                            page: 0,
                        },
                    }
                );
                setGuilds(response.data.raidRankings.map(rank => rank.guild));
            } catch (error) {
                console.error('Error fetching raid rankings:', error);
            } finally {
                setIsLoading(false);
            }
        };


        fetchGuilds();
    }, [raid, region]);

    if (!region || !raid || isLoading) {
        return (
            <View style={alerta.alertContainer}>
                <View style={styles.pickerContainer}>
                    <View style={styles.pickerWrapper}>
                        <Text style={styles.pickerLabel}>Selecciona una Raid</Text>
                        <RNPickerSelect
                            placeholder={{ label: 'Selecciona una Raid', value: null }}
                            onValueChange={(value) => setRaid(value)}
                            items={[
                                { label: 'Amirdrassil, la Esperanza del Sueño', value: 'amirdrassil-the-dreams-hope' },
                                { label: 'Aberrus, el Crisol Ensombrecido', value: 'aberrus-the-shadowed-crucible' },
                                { label: 'Boveda de las Encarnaciones', value: 'vault-of-the-incarnates' },
                                { label: 'Sepulcro de los Primeros', value: 'sepulcher-of-the-first-ones' },
                                { label: 'Santuario de Dominación', value: 'sanctum-of-domination' },
                                { label: 'Castillo de Nathria', value: 'castle-nathria' },
                                { label: "Ny'alotha, Ciudad del Despertar", value: 'nyalotha-the-waking-city' },
                                { label: 'El Palacio Eterno', value: 'the-eternal-palace' },
                                { label: 'Crisol de las Tormentas', value: 'crucible-of-the-storms' },
                                { label: "Batalla por Dazar'Alor", value: 'battle-of-dazaralor' },
                                { label: 'Uldir', value: 'uldir' },
                                { label: 'Antorus el Trono Ardiente', value: 'antorus-the-burning-throne' },
                                { label: 'Tumba de Sargeras', value: 'tomb-of-sargeras' },
                                { label: 'Bastión Nocturno', value: 'the-nighthold' },
                                { label: 'Prueba del Valor', value: 'trial-of-valor' },
                                { label: 'La Pesadilla Esmeralda', value: 'the-emerald-nightmare' },
                            ]}
                            style={{
                                inputAndroid: {
                                    color: 'black',
                                    backgroundColor: 'white',
                                },
                                placeholder: {
                                    color: 'black',
                                },
                                placeholderTextColor: 'black',
                                iconContainer: {
                                    top: 10,
                                    right: 12,
                                },
                            }}
                        />
                    </View>
                    <View style={styles.pickerWrapper}>
                        <Text style={styles.pickerLabel}>Selecciona una Región</Text>
                        <RNPickerSelect
                            placeholder={{ label: 'Selecciona una Región', value: null }}
                            onValueChange={(value) => setRegion(value)}
                            items={[
                                { label: 'World', value: 'world' },
                                { label: 'America y Oceania', value: 'us' },
                                { label: 'Europa', value: 'eu' },
                                { label: 'Taiwan', value: 'tw' },
                                { label: 'Corea', value: 'kr' },
                                { label: 'China', value: 'cn' },
                            ]}
                            style={{
                                inputAndroid: {
                                    color: 'black',
                                    backgroundColor: 'white',
                                },
                                placeholder: {
                                    color: 'black',
                                },
                                placeholderTextColor: 'black',
                                iconContainer: {
                                    top: 10,
                                    right: 12,
                                },
                            }}
                        />
                    </View>
                </View>
                <Text style={alerta.alertText}>Debe proporcionar los datos de búsqueda.</Text>
            </View>
        );
    }

    const handleGuildPress = (guild) => {
        navigation.navigate('Detalles Guild', {
            name: guild.name,
            region: guild.region.short_name,
            realm: guild.realm.name,
        });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.guildContainer} onPress={() => handleGuildPress(item)}>
            <Image style={styles.logo} source={{ uri: item.logo }} />
            <View style={styles.guildInfo}>
                <Text style={styles.guildName}>{item.name}</Text>
                <Text style={styles.guildInfo}>{`Facción: ${item.faction}`}</Text>
                <Text style={styles.guildInfo}>{`Region: ${item.region.short_name}`}</Text>
                <Text style={styles.guildInfo}>{`Servidor: ${item.realm.name}`}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.pickerContainer}>
                <View style={styles.pickerWrapper}>
                    <Text style={styles.pickerLabel}>Selecciona una Raid</Text>
                    <RNPickerSelect
                        placeholder={{ label: 'Selecciona una Raid', value: null }}
                        onValueChange={(value) => setRaid(value)}
                        items={[
                            { label: 'Amirdrassil, la Esperanza del Sueño', value: 'amirdrassil-the-dreams-hope' },
                            { label: 'Aberrus, el Crisol Ensombrecido', value: 'aberrus-the-shadowed-crucible' },
                            { label: 'Boveda de las Encarnaciones', value: 'vault-of-the-incarnates' },
                            { label: 'Sepulcro de los Primeros', value: 'sepulcher-of-the-first-ones' },
                            { label: 'Santuario de Dominación', value: 'sanctum-of-domination' },
                            { label: 'Castillo de Nathria', value: 'castle-nathria' },
                            { label: "Ny'alotha, Ciudad del Despertar", value: 'nyalotha-the-waking-city' },
                            { label: 'El Palacio Eterno', value: 'the-eternal-palace' },
                            { label: 'Crisol de las Tormentas', value: 'crucible-of-the-storms' },
                            { label: "Batalla por Dazar'Alor", value: 'battle-of-dazaralor' },
                            { label: 'Uldir', value: 'uldir' },
                            { label: 'Antorus el Trono Ardiente', value: 'antorus-the-burning-throne' },
                            { label: 'Tumba de Sargeras', value: 'tomb-of-sargeras' },
                            { label: 'Bastión Nocturno', value: 'the-nighthold' },
                            { label: 'Prueba del Valor', value: 'trial-of-valor' },
                            { label: 'La Pesadilla Esmeralda', value: 'the-emerald-nightmare' },
                        ]}
                        style={{
                            inputAndroid: {
                                color: 'black',
                                backgroundColor: 'white',
                            },
                            placeholder: {
                                color: 'white',
                            },
                            placeholderTextColor: 'white',
                            iconContainer: {
                                top: 10,
                                right: 12,
                            },
                        }}
                    />
                </View>
                <View style={styles.pickerWrapper}>
                    <Text style={styles.pickerLabel}>Selecciona una Región</Text>
                    <RNPickerSelect
                        placeholder={{ label: 'Selecciona una Región', value: null }}
                        onValueChange={(value) => setRegion(value)}
                        items={[
                            { label: 'World', value: 'world' },
                            { label: 'America y Oceania', value: 'us' },
                            { label: 'Europa', value: 'eu' },
                            { label: 'Taiwan', value: 'tw' },
                            { label: 'Corea', value: 'kr' },
                            { label: 'China', value: 'cn' },
                        ]}
                        style={{
                            inputAndroid: {
                                color: 'black',
                                backgroundColor: 'white',
                            },
                            placeholder: {
                                color: 'black',
                            },
                            placeholderTextColor: 'black',
                            iconContainer: {
                                top: 10,
                                right: 12,
                            },
                        }}
                    />
                </View>
            </View>
            <FlatList
                data={guilds}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default RaidRankings;
