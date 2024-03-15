import { View, Image } from 'react-native'
import { logoPersonaje, LogoGuild } from '../styles/Logos';

export const Logo = () => {
  return <View style={{ paddingBottom: 15 }}>
    <Image
      style={{ width: 400, height: 200 }}
      source={{ uri: "https://wowvendor.com/app/uploads/2023/08/thumb-5.jpg" }}
    />
  </View>
}

export const Personaje = () => {
  return (
    <View style={logoPersonaje.container}>
        <Image
          style={logoPersonaje.image}
          source={{ uri: "https://www.gamewallpapers.com/wallpapers_slechte_compressie/wallpaper_world_of_warcraft_shadowlands_01_1920x1080.jpg" }}
        />
    </View>
  );
};

export const Guild = () => {
  return <View style={{ marginBottom:50, }}>
    <Image
      style={LogoGuild.image}
      source={{ uri: "https://media.guildsofwow.com/library-images/859453/1080/battle-for-azeroth-horde-team.jpg" }}
    />
  </View>
}