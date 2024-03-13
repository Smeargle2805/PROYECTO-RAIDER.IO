import Home from './Screens/Home';
import SearchScreen from './Screens/Busqueda';
import SearchScreenGuild from './Screens/BHermandad';
import CharacterDetailsScreen from './Screens/Detalles';
import GuildDetailsScreen from './Screens/DHermandad';
import RaidRankings from './Screens/ListGuilds';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export function NavegacionDrawer() {
    return (
        <Drawer.Navigator
        drawerStyle={{backgroundColor: '#FF6347'}}>
        <Drawer.Screen name="Inicio" component={Home} />
        <Drawer.Screen name="Busqueda Personaje" component={SearchScreen} />
        <Drawer.Screen name="Detalles Personaje" component={CharacterDetailsScreen} />
        <Drawer.Screen name="Busqueda Guild" component={SearchScreenGuild} />
        <Drawer.Screen name="Detalles Guild" component={GuildDetailsScreen} />
        <Drawer.Screen name="Top Guilds" component={RaidRankings} />
      </Drawer.Navigator>
    );
  }