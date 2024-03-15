import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#000000',
    },
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        backgroundColor: '#1E1E1E',
        color: 'white'
    },
    pickerWrapper: {
        flex: 1,
        marginRight: 10,
    },
    pickerLabel:{
        color:'#FFCA38',
        fontWeight: 'bold'
    },
    guildContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#393838',
        padding: 10,
        borderRadius: 5,
    },
    logo: {
        width: 60,
        height: 60,
        marginRight: 20,
        marginLeft: 5
    },
    guildInfo: {
        flex: 1,
        color:'white'
    },
    guildName: {
        fontWeight: 'bold',
        marginBottom: 5,
        color:'#FFCA38',
        fontSize: 20
    },
});

export const alerta = StyleSheet.create({
    alertContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: '#000000',
    },
    alertText: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
});