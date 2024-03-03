import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import CharacterDetailsScreen from './Screens/Test';
import SearchScreen from './Screens/Busqueda';

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

                default:
                    nombreIcono = focused ? "gears" : "gears"
                    break;
            }
            return <Icon name={nombreIcono} size={20} color={color} />
        }
    })} >
        <Tab.Screen name="Busqueda" component={SearchScreen} />
        <Tab.Screen name="Detalles" component={CharacterDetailsScreen} />
    </Tab.Navigator>
}