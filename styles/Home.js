import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: 'black'
      },
      title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
      },
      subtitle: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
      },
      button: {
        backgroundColor: '#FF4500',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
  });