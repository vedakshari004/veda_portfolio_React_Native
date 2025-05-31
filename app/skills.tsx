import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function SkillsScreen() {
  const skills = [
    'Python',
    'Java',
    'SQL',
    'HTML / CSS / JavaScript',
    'React & React Native',
    'Android Development',
    'Machine Learning',
    'Data Science',
    'Git & GitHub',
    'Firebase',
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Skills</Text>
      {skills.map((skill, index) => (
        <View key={index} style={styles.skillItem}>
          <Text style={styles.skillText}>• {skill}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  skillItem: {
    paddingVertical: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  skillText: {
    fontSize: 18,
    color: '#555',
  },
});
