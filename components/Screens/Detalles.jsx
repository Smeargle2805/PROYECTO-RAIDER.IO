import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import axios from 'axios';
import { styles, alerta } from '../../styles/Detalles';

const formatRaidTitle = (raid) => {
  const words = raid.split('-');
  const formattedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return formattedWords.join(' ');
};

const CharacterDetailsScreen = ({ route }) => {
  const [characterData, setCharacterData] = useState(null);
  const [gearData, setGearData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { region, realm, characterName } = route.params || {};

  useEffect(() => {
    const fetchCharacterData = async () => {
      if (!region || !realm || !characterName) {
        setIsLoading(false);
        return;
      }

      try {
        const response = await axios.get(`https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${characterName}&fields=mythic_plus_scores_by_season%3Acurrent,gear,raid_progression`);
        setCharacterData(response.data);
        setGearData(response.data.gear);
      } catch (error) {
        console.error('Error fetching character data:', error);
      } finally {
        setIsLoading(false);
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
  const factionBanner = characterData.faction === 'horde'
    ? { uri: 'https://getwallpapers.com/wallpaper/full/0/6/3/261410.jpg' }
    : { uri: 'https://external-preview.redd.it/xPq0WfS5oWRLkw5tjNlk2M-i3-DU_VF85uuaBvLWeU8.jpg?auto=webp&s=d8e88e13ba9517b054b1ffb94bfdf18b7b550c79' };


  return (
    <ScrollView style={styles.container}>
      {characterData && (
        <>
          <View style={styles.banner}>
            <Image
              source={factionBanner}
              style={styles.backgroundImage}
            />

            <View style={styles.profileHeader}>
              <Image source={{ uri: characterData.thumbnail_url }} style={styles.profileImage} />
              <View style={styles.profileInfo}>
                <Text style={styles.playerName}>{characterData.name}</Text>
                <Text style={styles.playerDetails}>{characterData.active_spec_name} {characterData.class}</Text>
                <Text style={styles.playerDetails}>{characterData.race} - {characterData.gender}</Text>
                <Text style={styles.playerDetails}>{characterData.faction}</Text>
              </View>
            </View>
          </View>

          <Text style={styles.sectionHeader}>Mythic+ Scores</Text>
          <Text style={styles.scoreLabel}>Dragonflight Season 3</Text>
          <View style={styles.scoreContainer}>
            {characterData.mythic_plus_scores_by_season.map((seasonData, index) => (
              <View key={index}>
                <Text style={styles.score}>Overall: {seasonData.scores.all}</Text>
                <View style={styles.scoreRow}>
                  <View>
                    <Image
                      style={{ width: 45, height: 45 }}
                      source={{ uri: "https://gordian-knot.eu/wp-content/uploads/2020/11/DPS-role.png" }}
                    />
                    <Text style={styles.score}>DPS</Text>
                    <Text style={styles.score}>{seasonData.scores.dps}</Text>
                  </View>

                  <View>
                    <Image
                      style={{ width: 45, height: 45 }}
                      source={{ uri: "https://gordian-knot.eu/wp-content/uploads/2020/11/Healer-role.png" }}
                    />
                    <Text style={styles.score}>Healer</Text>
                    <Text style={styles.score}>{seasonData.scores.healer}</Text>
                  </View>

                  <View>
                    <Image
                      style={{ width: 45, height: 45 }}
                      source={{ uri: "https://gordian-knot.eu/wp-content/uploads/2020/11/Tank-role.png" }}
                    />
                    <Text style={styles.score}>Tank</Text>
                    <Text style={styles.score}>{seasonData.scores.tank}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>

          <Text style={styles.sectionHeader}>Equipamiento</Text>
          <View style={styles.gearContainer}>
            {gearData && Object.keys(gearData.items).map((slot, index) => (
              <View key={index} style={styles.gearItem}>
                <Image source={{ uri: `https://render.worldofwarcraft.com/icons/56/${gearData.items[slot].icon}.jpg` }} style={styles.gearIcon} />
                <View style={styles.gearInfo}>
                  <Text style={styles.gearName}>{gearData.items[slot].name}</Text>
                  <Text style={styles.gearLevel}>Nivel Objeto: {gearData.items[slot].item_level}</Text>
                </View>
              </View>
            ))}
          </View>

          <Text style={styles.sectionHeader}>Raid Progression</Text>
          <View style={styles.gearContainer}>
            {characterData.raid_progression && Object.keys(characterData.raid_progression).map((raid, index) => (
              <View key={index} style={styles.raidContainer}>
                <Text style={styles.raidTitle}>{formatRaidTitle(raid)}</Text>
                <View style={styles.raidProgression}>
                <Text style={styles.raidSummary}>{characterData.raid_progression[raid].summary}</Text>
                </View>
              </View>
            ))}
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default CharacterDetailsScreen;






