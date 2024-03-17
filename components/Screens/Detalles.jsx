import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
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

  const navigateToProfile = () => {
    if (characterData.profile_url) {
      Linking.openURL(characterData.profile_url);
    }
  };

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

            <TouchableOpacity style={styles.profileButton} onPress={() => navigateToProfile()}>
              <Image source={{ uri: 'https://yt3.googleusercontent.com/ytc/AIdro_lkBlXGH-KKNxkcI8CzUmOKGf9Tty-1z4uvUmlE=s900-c-k-c0x00ffffff-no-rj' }} style={styles.profileIcon} />
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionHeader}>Mythic+ Scores</Text>
          <Text style={styles.scoreLabel}>Dragonflight Season 3</Text>
          <View>
            {characterData.mythic_plus_scores_by_season.map((seasonData, index) => (
              <View key={index}>
                <Text style={styles.scoreOverall}>{seasonData.scores.all}</Text>
                <View style={styles.scoreContainer}>
                  <View style={styles.scoreRow}>
                    <View style={styles.scoreItem}>
                      <Image
                        style={styles.scoreImage}
                        source={{ uri: "https://i.pinimg.com/originals/2e/74/c9/2e74c929df9fdac114fab40b38bf2d33.png" }}
                      />
                      <Text style={styles.score}>Daño</Text>
                      <Text style={styles.score}>{seasonData.scores.dps}</Text>
                    </View>

                    <View style={styles.scoreItem}>
                      <Image
                        style={styles.scoreImage}
                        source={{ uri: "https://vanillawowtanking.files.wordpress.com/2015/02/2656p_0c_2b.jpg?w=640" }}
                      />
                      <Text style={styles.score}>Sanador</Text>
                      <Text style={styles.score}>{seasonData.scores.healer}</Text>
                    </View>

                    <View style={styles.scoreItem}>
                      <Image
                        style={styles.scoreImage}
                        source={{ uri: "https://addonswotlk.com/wp-content/uploads/2023/05/637075127215076342.jpeg.webp" }}
                      />
                      <Text style={styles.score}>Tanque</Text>
                      <Text style={styles.score}>{seasonData.scores.tank}</Text>
                    </View>
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
                <Text style={styles.raidTotal}>{characterData.raid_progression[raid].summary}</Text>
                <View style={styles.raidProgression}>
                  <Text style={styles.raidSummary}>Normal: {characterData.raid_progression[raid].normal_bosses_killed}</Text>
                  <Text style={styles.raidSummary}>Heroico: {characterData.raid_progression[raid].heroic_bosses_killed}</Text>
                  <Text style={styles.raidSummary}>Mitico: {characterData.raid_progression[raid].mythic_bosses_killed}</Text>
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






