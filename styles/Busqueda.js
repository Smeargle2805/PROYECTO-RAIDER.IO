import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        width: '80%',
        backgroundColor: 'white',
        fontSize: 16
    },
    inputContainer: {
        width: '120%',
        marginBottom: 5,
        alignContent: 'center',
        paddingLeft: 80,
        borderRadius: 8,
        paddingTop: 30
    },
    button: {
        backgroundColor: '#FC8F31',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    textLabel: {
        color: '#FFCA38',
        fontWeight: 'bold',
        textAlign: 'left',
        alignSelf: 'flex-start',
        paddingLeft: 40
    },
    pickerLabel: {
        color: '#FFCA38',
        fontWeight: 'bold'
    },
});

export const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        fontSize: 16,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 10,
        color: 'black',
        width: '80%',
        marginBottom: 20,
        alignContent: 'center',
        backgroundColor: 'white',
    },
});