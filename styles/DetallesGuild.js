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
        marginTop: 15,
        color: '#FFCA38',
        marginLeft: 10
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
        marginTop: 4,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#292929',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10
    },
    raidInfoContainer: {
        flex: 1,
        marginRight: 8,
    },
    raidTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10
    },
    world: {
        fontSize: 14,
        marginBottom: 3,
        color: '#FFF767',
        fontWeight: 'bold'
    },
    region: {
        fontSize: 14,
        marginBottom: 3,
        color: '#FDA04D',
        fontWeight: 'bold'
    },
    realm: {
        fontSize: 14,
        marginBottom: 3,
        color: '#852DC7',
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
        marginLeft: 10,
        marginRight: 10
    },
    raidSummary: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10
    },
    raidBossesKilled: {
        fontSize: 14,
        color: 'white',
    },
    raids:{
        backgroundColor:'#383838',
        marginBottom: 20,
        borderRadius: 10
    },
    members: {
        marginTop: 4,
        marginBottom: 15,
        flexDirection: 'colum',
        alignItems: 'right',
        backgroundColor: '#292929',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10
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