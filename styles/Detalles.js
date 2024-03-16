import { ProgressBarAndroidComponent, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 10,
    },
    banner: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 90,
        height: 90,
        borderRadius: 40,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20,
        shadowColor: 'black',
        borderColor: 'black',
        borderWidth: 3
    },
    playerName: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'white'
    },
    playerDetails: {
        fontSize: 16,
        marginBottom: 3,
        color: 'white'
    },
    profileButton: {
        position: 'absolute',
        bottom: 10,
        right: 20,
        backgroundColor: 'transparent',
        borderRadius: 50,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    profileIcon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 15,
        color: '#FFCA38',
        marginLeft: 10
    },
    scoreLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        paddingBottom: 10,
        marginLeft: 10,
    },
    scoreOverall: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FC8F31',
        paddingBottom: 10,
        marginLeft: 10,
    },
    scoreContainer: {
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
    scoreRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 10,
    },
    scoreItem: {
        alignItems: 'center',
        marginRight: 20,
    },
    scoreImage: {
        width: 55,
        height: 55,
    },
    score: {
        fontSize: 14,
        marginBottom: 3,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    gearContainer: {
        marginTop: 4,
        marginBottom: 15,
        flexDirection: 'colum',
        alignItems: 'right',
        backgroundColor: '#383838',
        paddingHorizontal: 16,
        paddingVertical: 13,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10,
    },
    gearItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#292929',
        padding: 10,
        borderRadius: 10
    },
    gearIcon: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 5
    },
    gearName: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        maxWidth: '95%',
    },
    gearLevel: {
        fontSize: 14,
        color: '#852DC7',
        fontWeight: 'bold'
    },
    raidContainer: {
        marginBottom: 3,
        marginTop: 5,
    },
    raidTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    raidSummary: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold'
    },
    raidTotal: {
        fontSize: 14,
        color: '#FC8F31',
        fontWeight: 'bold'
    },
    raidProgression: {
        marginTop: 4,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#292929',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 5,
    },
});

export const alerta = StyleSheet.create({
    alertContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        padding: 20,
    },
    alertText: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FFCA38',
    },
});
