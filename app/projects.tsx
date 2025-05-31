import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ProjectsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Projects</Text>

      <View style={styles.card}>
        <Text style={styles.projectTitle}>Classroom Database Management System (DBMS)</Text>
        <Text style={styles.projectDescription}>
          Developed a system to automate operations related to classroom scheduling, faculty
          assignments, student records, attendance tracking, and exam management. The system
          improves administrative efficiency and lays the groundwork for future enhancements to
          support a more interactive and user-friendly interface for streamlined data access and
          management.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.projectTitle}>Digital Skills Development</Text>
        <Text style={styles.projectDescription}>
          Completed a course by Accenture focused on developing essential digital skills and
          understanding the impact of technology across industries. Explored how emerging tools and
          innovations shape the future of work and society. Demonstrated commitment to learning and
          adapting in a tech-driven environment.
        </Text>
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
    color: '#333',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f0f8ff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    elevation: 2,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
    color: '#000',
  },
  projectDescription: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
});
