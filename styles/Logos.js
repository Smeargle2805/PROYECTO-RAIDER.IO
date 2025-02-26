import { StyleSheet } from "react-native";

export const logoPersonaje = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative', // Añadimos esta propiedad para establecer un contexto de apilamiento
  },
  image: {
    width: 315,
    height: 200,
    borderRadius: 3,
    position: 'relative', // Añadimos esta propiedad para establecer un contexto de apilamiento
  },
});

export const LogoGuild = StyleSheet.create({
  image:{
    width: 315,
    height: 200,
    borderRadius: 3,
    position: 'relative',
  }
});

