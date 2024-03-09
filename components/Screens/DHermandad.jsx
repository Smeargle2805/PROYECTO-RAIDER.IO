import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import axios from 'axios';
import {styles, alerta} from '../../styles/DetallesGuild';

const GuildDetailsScreen = ({ route }) => {
    const [guildData, setGuildData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { region, realm, name } = route.params || {};

    useEffect(() => {
        const fetchGuildData = async () => {
            if (!region || !realm || !name) {
                setIsLoading(false); // No hay información de búsqueda, establece isLoading a false
                return;
            }

            try {
                const response = await axios.get(`https://raider.io/api/v1/guilds/profile?region=${region}&realm=${realm}&name=${name}&fields=raid_progression%2Craid_rankings%2Cmembers`);
                setGuildData(response.data);
            } catch (error) {
                console.error('Error fetching character data:', error);
            } finally {
                setIsLoading(false); // Incluso si hay un error, establece isLoading a false
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
    return (
        <ScrollView style={styles.container}>
            {guildData && (
                <>
                    <View style={styles.profileHeader}>
                        <Image source={{ uri: guildData.thumbnail_url }} style={styles.profileImage} />
                        <View style={styles.profileInfo}>
                            <Text style={styles.playerName}>{guildData.name}</Text>
                            <Text style={styles.playerDetails}>Facción: {guildData.faction}</Text>
                            <Text style={styles.playerDetails}>Región: {guildData.region}</Text>
                            <Text style={styles.playerDetails}>Reino: {guildData.realm}</Text>
                        </View>
                    </View>

                    <Text style={styles.sectionHeader}>Raid Rankings</Text>
                    <View style={styles.raidRankings}>
                        {guildData.raid_rankings && Object.keys(guildData.raid_rankings).map((raid, index) => (
                            <View key={index}>
                                <Text style={styles.raidTitle}>{raid}</Text>
                                <Text style={styles.raidRanking}>Normal:</Text>
                                <Text style={styles.raidRanking}>World: {guildData.raid_rankings[raid].normal.world}</Text>
                                <Text style={styles.raidRanking}>Region: {guildData.raid_rankings[raid].normal.region}</Text>
                                <Text style={styles.raidRanking}>Realm: {guildData.raid_rankings[raid].normal.realm}</Text>
                                <Text style={styles.raidRanking}>Heroic:</Text>
                                <Text style={styles.raidRanking}>World: {guildData.raid_rankings[raid].heroic.world}</Text>
                                <Text style={styles.raidRanking}>Region: {guildData.raid_rankings[raid].heroic.region}</Text>
                                <Text style={styles.raidRanking}>Realm: {guildData.raid_rankings[raid].heroic.realm}</Text>
                                <Text style={styles.raidRanking}>Mythic:</Text>
                                <Text style={styles.raidRanking}>World: {guildData.raid_rankings[raid].mythic.world}</Text>
                                <Text style={styles.raidRanking}>Region: {guildData.raid_rankings[raid].mythic.region}</Text>
                                <Text style={styles.raidRanking}>Realm: {guildData.raid_rankings[raid].mythic.realm}</Text>
                            </View>
                        ))}
                    </View>

                    <Text style={styles.sectionHeader}>Raid Progression</Text>
                    <View style={styles.raidProgression}>
                        {guildData.raid_progression && Object.keys(guildData.raid_progression).map((raid, index) => (
                            <View key={index}>
                                <Text style={styles.raidTitle}>{raid}</Text>
                                <Text style={styles.raidSummary}>{guildData.raid_progression[raid].summary}</Text>
                                <Text style={styles.raidBossesKilled}>Normal Bosses Killed: {guildData.raid_progression[raid].normal_bosses_killed}</Text>
                                <Text style={styles.raidBossesKilled}>Heroic Bosses Killed: {guildData.raid_progression[raid].heroic_bosses_killed}</Text>
                                <Text style={styles.raidBossesKilled}>Mythic Bosses Killed: {guildData.raid_progression[raid].mythic_bosses_killed}</Text>
                            </View>
                        ))}
                    </View>
                </>
            )}
        </ScrollView>
    );
}

export default GuildDetailsScreen;