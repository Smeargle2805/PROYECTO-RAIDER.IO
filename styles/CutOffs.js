import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    table: {
        borderWidth: 1,
        borderColor: '#000',
        marginTop: 10,
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#000',
    },
    headerCell: {
        flex: 1,
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#383838',
        color: '#FFCA38',
    },
    cell: {
        flex: 1,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    pickerContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        marginBottom: 10,
        backgroundColor: 'black',
        color: 'white'
    },
    pickerWrapper: {
        flex: 1,
        marginRight: 10,
        marginLeft: 75,
        marginTop: 20
    },
    pickerLabel: {
        color: '#FFCA38',
        fontWeight: 'bold'
    },
    marco: {
        paddingHorizontal: 20,
        marginBottom: 20,
        marginTop: 5,
        backgroundColor: 'black',
        borderWidth: 4,
        borderColor: '#515151',
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
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