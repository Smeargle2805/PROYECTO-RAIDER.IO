import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image} from 'react-native';
import axios from 'axios';
import {styles, alerta} from '../../styles/Detalles';

const CharacterDetailsScreen = ({ route }) => {
    const [characterData, setCharacterData] = useState(null);
    const [gearData, setGearData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    const { region, realm, characterName } = route.params || {};
  
    useEffect(() => {
      const fetchCharacterData = async () => {
        if (!region || !realm || !characterName) {
          setIsLoading(false); // No hay información de búsqueda, establece isLoading a false
          return;
        }
  
        try {
          const response = await axios.get(`https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${characterName}&fields=mythic_plus_scores_by_season%3Acurrent,gear,raid_progression`);
          setCharacterData(response.data);
          setGearData(response.data.gear);
        } catch (error) {
          console.error('Error fetching character data:', error);
        } finally {
          setIsLoading(false); // Incluso si hay un error, establece isLoading a false
        }
      };
  
      fetchCharacterData();
    }, [region, realm, characterName]);
  
    if (!region || !realm || !characterName || isLoading) {
      return (
        <View style={alerta.alertContainer}>
              <Text style={alerta.alertText}>Debe proporcionar los datos de búsqueda.</Text>
            </View>
      );
    }

  return (
    <ScrollView style={styles.container}>
            {characterData && (
                <>
                    <View style={styles.profileHeader}>
                        <Image source={{ uri: characterData.thumbnail_url }} style={styles.profileImage} />
                        <View style={styles.profileInfo}>
                            <Text style={styles.playerName}>{characterData.name}</Text>
                            <Text style={styles.playerDetails}>{characterData.active_spec_name} {characterData.class}</Text>
                            <Text style={styles.playerDetails}>{characterData.race} - {characterData.gender}</Text>
                        </View>
                    </View>

                    <Text style={styles.sectionHeader}>Mythic+ Scores</Text>
                    <View style={styles.scoresContainer}>
                        {characterData.mythic_plus_scores_by_season.map((seasonData, index) => (
                            <View key={index}>
                                <Text style={styles.scoreLabel}>Season: Dragonflight Season 3</Text>
                                <Text style={styles.score}>Overall: {seasonData.scores.all}</Text>
                                <View style={styles.scoreRow}>
                                    <Text style={styles.score}>DPS: {seasonData.scores.dps}</Text>
                                    <Text style={styles.score}>Healer: {seasonData.scores.healer}</Text>
                                    <Text style={styles.score}>Tank: {seasonData.scores.tank}</Text>
                                </View>
                                {/* Agrega más detalles de scores si es necesario */}
                            </View>
                        ))}
                    </View>

                    <Text style={styles.sectionHeader}>Gear</Text>
                    <View style={styles.gearContainer}>
                        {gearData && Object.keys(gearData.items).map((slot, index) => (
                            <View key={index} style={styles.gearItem}>
                                <Image source={{ uri: `https://render.worldofwarcraft.com/icons/56/${gearData.items[slot].icon}.jpg` }} style={styles.gearIcon} />
                                <View style={styles.gearInfo}>
                                    <Text style={styles.gearName}>{gearData.items[slot].name}</Text>
                                    <Text style={styles.gearLevel}>Item Level: {gearData.items[slot].item_level}</Text>
                                </View>
                            </View>
                        ))}
                    </View>

                    <Text style={styles.sectionHeader}>Raid Progression</Text>
                    <View style={styles.raidProgression}>
                        {characterData.raid_progression && Object.keys(characterData.raid_progression).map((raid, index) => (
                            <View key={index} style={styles.raidContainer}>
                                <Text style={styles.raidTitle}>{raid}</Text>
                                <Text style={styles.raidSummary}>{characterData.raid_progression[raid].summary}</Text>
                            </View>
                        ))}
                    </View>
                </>
            )}
        </ScrollView>
  );
};

export default CharacterDetailsScreen;






