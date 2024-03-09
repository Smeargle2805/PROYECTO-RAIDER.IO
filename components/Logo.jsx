import {View, Image} from 'react-native'
import { logoPersonaje, logoGuild } from '../styles/Logos';

export const Logo = () => {
    return <View style={{paddingBottom: 15}}>
        <Image 
            style={{width: 400, height: 200}}
            source={{uri: "https://wowvendor.com/app/uploads/2023/08/thumb-5.jpg"}}
        />
    </View>
}

export const Personaje = () => {
    return (
      <View style={logoPersonaje.container}>
        <Image 
          style={logoPersonaje.image}
          source={{uri: "https://www.wallpaperuse.com/wallp/66-669155_m.jpg"}}
        />
      </View>
    );
  };

export const Guild = () => {
    return <View style={{paddingBottom: 30}}>
        <Image 
            style={{width: 315, height: 200}}
            source={{uri: "https://media.guildsofwow.com/library-images/859453/1080/battle-for-azeroth-horde-team.jpg"}}
        />
    </View>
}