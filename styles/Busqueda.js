import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
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
    },
    button: {
        backgroundColor: '#F2B202',
        padding: 10,
        borderRadius: 5,
        width: '50%',
    },
});

export const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        fontSize: 16,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        width: '80%',
        marginBottom: 20,
        alignContent: 'center',
        backgroundColor: 'white',
    },
});