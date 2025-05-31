import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function EducationScreen() {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'RVR & JC College of Engineering',
      location: 'Guntur, AP, India',
      duration: 'Oct 2022 – June 2026 (Expected)',
      gpa: 'GPA - 8.42',
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Bhashyam Junior College',
      location: 'Guntur, AP, India',
      duration: 'June 2020 – Apr 2022',
      gpa: 'GPA - 9.46',
    },
    {
      degree: 'SSC',
      institution: 'Bhashyam High School',
      location: 'Guntur, AP, India',
      duration: 'June 2019 – Apr 2020',
      gpa: 'GPA - 10',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Education</Text>
      {educationData.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.degree}>{item.degree}</Text>
          <Text style={styles.institution}>{item.institution}</Text>
          <Text style={styles.details}>{item.location}</Text>
          <Text style={styles.details}>{item.duration}</Text>
          <Text style={styles.details}>{item.gpa}</Text>
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
  card: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#f1f8ff',
    borderRadius: 10,
    elevation: 2,
  },
  degree: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    color: '#000',
  },
  institution: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
});
