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
        color: '#FDA04D',
        fontWeight: 'bold',
        marginLeft: 10
    },
    raidBossesKilled: {
        fontSize: 14,
        color: 'white',
    },
    raids: {
        backgroundColor: '#383838',
        marginBottom: 20,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    memberName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FDA04D',
    },
    members: {
        marginTop: 4,
        marginBottom: 10,
        flexDirection: 'colum',
        alignItems: 'right',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 5,
        marginRight: 10
    },
    guildContainer: {
        flexDirection: 'row',
        alignItems: 'right',
        marginBottom: 10,
        backgroundColor: '#393838',
        borderRadius: 5,
        marginLeft: 10,
        marginRight: 10
    },
    logo: {
        width: 80,
        height: 80,
        marginRight: 15,
        marginLeft: 20,
        marginTop: 23
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