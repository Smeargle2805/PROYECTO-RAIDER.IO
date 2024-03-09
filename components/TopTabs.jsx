import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import CharacterDetailsScreen from './Screens/Detalles';
import GuildDetailsScreen from './Screens/DHermandad';
import SearchScreen from './Screens/Busqueda';
import SearchScreenGuild from './Screens/BHermandad';

const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {
    return <Tab.Navigator style={{ marginTop: 40, color: 'black' }} screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            let nombreIcono

            switch (route.name) {
                case 'Busqueda':
                    nombreIcono = focused ? "search" : "search"
                    break;

                case 'Detalles':
                    nombreIcono = focused ? "book" : "book"
                    break;

                case 'Busqueda Guild':
                    nombreIcono = focused ? "search" : "search"
                    break;

                case 'Detalles Guild':
                    nombreIcono = focused ? "book" : "book"
                    break;

                default:
                    nombreIcono = focused ? "gears" : "gears"
                    break;
            }
            return <Icon name={nombreIcono} size={20} color={color} />
        }
    })} >
        <Tab.Screen name="Busqueda" component={SearchScreen} />
        <Tab.Screen name="Detalles" component={CharacterDetailsScreen} />
        <Tab.Screen name="Busqueda Guild" component={SearchScreenGuild} />
        <Tab.Screen name="Detalles Guild" component={GuildDetailsScreen} />
    </Tab.Navigator>
}