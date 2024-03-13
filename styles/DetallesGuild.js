import { StyleSheet } from "react-native";

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
        marginLeft: 20,
        marginTop: 10
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
    scoresContainer: {
        marginBottom: 15,
    },
    scoreLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    score: {
        fontSize: 14,
        marginBottom: 3,
        color: 'white'
    },
    gearContainer: {
        marginBottom: 15,
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
    raidRankings: {
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#292929',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    raidInfoContainer: {
        flex: 1,
        marginRight: 8,
    },
    raidTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    raidRanking: {
        fontSize: 14,
        marginBottom: 3,
        color: 'white'
    },
    raidProgression: {
        marginBottom: 15,
    },
    raidSummary: {
        fontSize: 14,
        color: 'white'
    },
    raidBossesKilled: {
        fontSize: 14,
        color: 'white'
    },
});

export const alerta = StyleSheet.create({
    alertContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3E3E3E',
        padding: 20,
    },
    alertText: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
});