import { StyleSheet } from 'react-native';

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
    sectionHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20,
        color: 'white'
    },
    scoreContainer: {
        marginBottom: 15,
        backgroundColor: '#292929',
        borderRadius: 5,
        paddingTop: 5
    },
    scoreLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        paddingBottom: 10
    },
    scoreRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        paddingTop: 2,
        backgroundColor: '#292929',
        paddingLeft: 10,
        paddingRight: 10,
    },
    score: {
        fontSize: 14,
        marginBottom: 3,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    gearItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    gearIcon: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    gearName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    gearLevel: {
        fontSize: 14,
        color: 'white'
    },
    raidContainer: {
        marginBottom: 15,
    },
    raidTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    raidSummary: {
        fontSize: 14,
        color: 'white'
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
        color: 'white',
    },
});
