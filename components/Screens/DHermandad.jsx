import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, FlatList } from 'react-native';
import axios from 'axios';
import { styles, alerta } from '../../styles/DetallesGuild';

const formatRaidTitle = (raid) => {
    const words = raid.split('-');
    const formattedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return formattedWords.join(' ');
};

const GuildDetailsScreen = ({ route }) => {
    const [guildData, setGuildData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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
                console.error('Error fetching character data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGuildData();
    }, [region, realm, name]);

    if (!region || !realm || !name || isLoading) {
        return (
            <View style={alerta.alertContainer}>
                <Text style={alerta.alertText}>Debe proporcionar los datos de búsqueda.</Text>
            </View>
        );
    }

    const factionBanner = guildData.faction === 'horde'
        ? { uri: 'https://getwallpapers.com/wallpaper/full/0/6/3/261410.jpg' }
        : { uri: 'https://external-preview.redd.it/xPq0WfS5oWRLkw5tjNlk2M-i3-DU_VF85uuaBvLWeU8.jpg?auto=webp&s=d8e88e13ba9517b054b1ffb94bfdf18b7b550c79' };

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
                    </View>

                    <View style={styles.raids}>
                        <Text style={styles.sectionHeader}>Raid Rankings</Text>
                        <FlatList
                            data={Object.keys(guildData.raid_rankings)}
                            renderItem={({ item }) => (
                                <View>
                                    <Text style={styles.raidTitle}>{formatRaidTitle(item)}</Text>
                                    <View style={styles.raidRankings}>
                                        <Text style={styles.world}>World: {guildData.raid_rankings[item].mythic.world}</Text>
                                        <Text style={styles.region}>Region: {guildData.raid_rankings[item].mythic.region}</Text>
                                        <Text style={styles.realm}>Realm: {guildData.raid_rankings[item].mythic.realm}</Text>
                                    </View>
                                </View>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>

                    <View style={styles.raids}>
                        <Text style={styles.sectionHeader}>Raid Progression</Text>
                        <FlatList
                            data={Object.keys(guildData.raid_progression)}
                            renderItem={({ item }) => (
                                <View>
                                    <Text style={styles.raidTitle}>{formatRaidTitle(item)}</Text>
                                    <Text style={styles.raidSummary}>{guildData.raid_progression[item].summary}</Text>
                                    <View style={styles.raidProgression}>
                                        <Text style={styles.raidBossesKilled}>Mythic: {guildData.raid_progression[item].mythic_bosses_killed}</Text>
                                        <Text style={styles.raidBossesKilled}>Heroic: {guildData.raid_progression[item].heroic_bosses_killed}</Text>
                                        <Text style={styles.raidBossesKilled}>Normal: {guildData.raid_progression[item].normal_bosses_killed}</Text>
                                    </View>
                                </View>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </>
            )}
        </ScrollView>
    );
}

export default GuildDetailsScreen;