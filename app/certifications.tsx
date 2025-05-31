import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function CertificationsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Certifications</Text>

      <View style={styles.certList}>
        <Text style={styles.certItem}>• Digital Skills – Artificial Intelligence (Accenture)</Text>
        <Text style={styles.certItem}>• AWS Cloud Foundations</Text>
        <Text style={styles.certItem}>• Prompt Engineering (IBM)</Text>
        <Text style={styles.certItem}>• Machine Learning (Kaggle)</Text>
        <Text style={styles.certItem}>• Introduction to Generative AI (AWS)</Text>
        <Text style={styles.certItem}>• Psychology of Learning (NPTEL)</Text>
        <Text style={styles.certItem}>• Generative AI Fundamentals (Databricks)</Text>
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
  certList: {
    gap: 12,
  },
  certItem: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8,
  },
});
