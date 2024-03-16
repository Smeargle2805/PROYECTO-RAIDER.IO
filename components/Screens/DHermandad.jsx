import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, FlatList, TouchableOpacity, Linking } from 'react-native';
import axios from 'axios';
import { styles, alerta } from '../../styles/DetallesGuild';
import { useNavigation } from '@react-navigation/native';

const formatRaidTitle = (raid) => {
    const words = raid.split('-');
    const formattedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return formattedWords.join(' ');
};

const GuildDetailsScreen = ({ route }) => {
    const [guildData, setGuildData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation();
    const { region, realm, name } = route.params || {};

    useEffect(() => {
        const fetchGuildData = async () => {
            if (!region || !realm || !name) {
                setIsLoading(false);
                return;
            }

            try {
                const response = await axios.get(`https://raider.io/api/v1/guilds/profile?region=${region}&realm=${realm}&name=${name}&fields=raid_progression%2Craid_rankings%2Cmembers`);
                setGuildData(response.data);
            } catch (error) {
                console.error('Error fetching guild data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGuildData();
    }, [region, realm, name]);

    const fetchRank1And2Characters = () => {
        if (!guildData || !guildData.members) return [];

        return guildData.members.filter(member => member.rank === 1 || member.rank === 2);
    };

    if (!region || !realm || !name || isLoading) {
        return (
            <View style={alerta.alertContainer}>
                <Text style={alerta.alertText}>Debe proporcionar los datos de búsqueda.</Text>
            </View>
        );
    }

    const handleCharacterPress = (character) => {
        navigation.navigate('Detalles Personaje', {
            characterName: character.character.name,
            region: character.character.region,
            realm: character.character.realm,
        });
    };

    const rank1And2Characters = fetchRank1And2Characters();

    const factionBanner = guildData.faction === 'horde'
        ? { uri: 'https://getwallpapers.com/wallpaper/full/0/6/3/261410.jpg' }
        : { uri: 'https://external-preview.redd.it/xPq0WfS5oWRLkw5tjNlk2M-i3-DU_VF85uuaBvLWeU8.jpg?auto=webp&s=d8e88e13ba9517b054b1ffb94bfdf18b7b550c79' };

    const navigateToProfile = () => {
        if (guildData.profile_url) {
            Linking.openURL(guildData.profile_url);
        }
    };

    function obtenerTituloPorRango(rank) {
        if (rank === 1) {
            return "Guild Master";
        } else if (rank === 2) {
            return "Oficial";
        } else {
            return "Rango desconocido";
        }
    }

    const renderItem = ({ item }) => {

        return (
            <TouchableOpacity style={styles.guildContainer} onPress={() => handleCharacterPress(item)}>
                <Image style={styles.logo} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5987/5987424.png' }} />
                <View style={styles.members}>
                    <Text style={styles.memberName}>{item.character.name}</Text>
                    <Text style={styles.raidBossesKilled}>{item.character.class} - {item.character.active_spec_name}</Text>
                    <Text style={styles.raidBossesKilled}>Rango: {obtenerTituloPorRango(item.rank)}</Text>
                    <Text style={styles.raidBossesKilled}>Region: {item.character.region}</Text>
                    <Text style={styles.raidBossesKilled}>Reino: {item.character.realm}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <ScrollView style={styles.container}>
            {guildData && (
                <>
                    <View style={styles.banner}>
                        <Image
                            source={factionBanner}
                            style={styles.backgroundImage}
                        />
                        <View style={styles.profileHeader}>
                            <View style={styles.profileInfo}>
                                <Text style={styles.playerName}>{guildData.name}</Text>
                                <Text style={styles.playerDetails}>Facción: {guildData.faction}</Text>
                                <Text style={styles.playerDetails}>Región: {guildData.region}</Text>
                                <Text style={styles.playerDetails}>Reino: {guildData.realm}</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.profileButton} onPress={() => navigateToProfile()}>
                            <Image source={{ uri: 'https://yt3.googleusercontent.com/ytc/AIdro_lkBlXGH-KKNxkcI8CzUmOKGf9Tty-1z4uvUmlE=s900-c-k-c0x00ffffff-no-rj' }} style={styles.profileIcon} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.raids}>
                        <Text style={styles.sectionHeader}>Raid Rankings</Text>
                        {Object.keys(guildData.raid_rankings).map((item, index) => (
                            <View key={index}>
                                <Text style={styles.raidTitle}>{formatRaidTitle(item)}</Text>
                                <View style={styles.raidRankings}>
                                    <Text style={styles.world}>World: {guildData.raid_rankings[item].mythic.world}</Text>
                                    <Text style={styles.region}>Region: {guildData.raid_rankings[item].mythic.region}</Text>
                                    <Text style={styles.realm}>Realm: {guildData.raid_rankings[item].mythic.realm}</Text>
                                </View>
                            </View>
                        ))}
                    </View>

                    <View style={styles.raids}>
                        <Text style={styles.sectionHeader}>Raid Progression</Text>
                        {Object.keys(guildData.raid_progression).map((item, index) => (
                            <View key={index}>
                                <Text style={styles.raidTitle}>{formatRaidTitle(item)}</Text>
                                <Text style={styles.raidSummary}>{guildData.raid_progression[item].summary}</Text>
                                <View style={styles.raidProgression}>
                                    <Text style={styles.raidBossesKilled}>Mythic: {guildData.raid_progression[item].mythic_bosses_killed}</Text>
                                    <Text style={styles.raidBossesKilled}>Heroic: {guildData.raid_progression[item].heroic_bosses_killed}</Text>
                                    <Text style={styles.raidBossesKilled}>Normal: {guildData.raid_progression[item].normal_bosses_killed}</Text>
                                </View>
                            </View>
                        ))}
                    </View>

                    <Text style={styles.sectionHeader}>Guild Masters & Oficiales</Text>
                    {rank1And2Characters.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.guildContainer}
                            onPress={() => handleCharacterPress(item)}
                        >
                            <Image
                                style={styles.logo}
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5987/5987424.png' }}
                            />
                            <View style={styles.members}>
                                <Text style={styles.memberName}>{item.character.name}</Text>
                                <Text style={styles.raidBossesKilled}>{item.character.class} - {item.character.active_spec_name}</Text>
                                <Text style={styles.raidBossesKilled}>Rango: {obtenerTituloPorRango(item.rank)}</Text>
                                <Text style={styles.raidBossesKilled}>Region: {item.character.region}</Text>
                                <Text style={styles.raidBossesKilled}>Reino: {item.character.realm}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </>
            )}
        </ScrollView>
    );
}

export default GuildDetailsScreen;