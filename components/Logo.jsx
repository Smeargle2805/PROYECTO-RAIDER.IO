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
          source={{ uri: "https://pixelz.cc/wp-content/uploads/2018/12/world-of-warcraft-garrosh-hellscream-uhd-4k-wallpaper.jpg" }}
        />
    </View>
  );
};

export const Guild = () => {
  return <View style={{ marginBottom:50, }}>
    <Image
      style={LogoGuild.image}
      source={{ uri: "https://images6.alphacoders.com/900/900476.jpg" }}
    />
  </View>
}