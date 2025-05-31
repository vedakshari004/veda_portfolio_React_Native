import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ParticipationsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Participations & Leadership</Text>

      <View style={styles.itemList}>
        <Text style={styles.item}>• Held leadership roles as IEEE-CIS Chair and Treasurer of IEEE-WIE, demonstrating strong organizational and financial management skills.</Text>
        <Text style={styles.item}>• Actively volunteered and organized technical and cultural events, including IEEE initiatives and ISTE’s “MEDHANVESH.”</Text>
        <Text style={styles.item}>• Engaged in social work and co-curricular activities, with active participation in quizzes and various college events.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  itemList: {
    gap: 16,
  },
  item: {
    fontSize: 16,
    color: '#444',
    marginBottom: 12,
    lineHeight: 22,
  },
});
