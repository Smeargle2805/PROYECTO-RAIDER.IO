import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
  },
  playerName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  playerDetails: {
    fontSize: 16,
    color: '#666',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  raidProgression: {
    marginBottom: 20,
  },
  raidTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  raidSummary: {
    fontSize: 16,
    color: '#666',
  },
  gearIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});

export default styles;
