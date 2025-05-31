import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Button,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.innerContainer}>
        <StatusBar style={isDark ? 'light' : 'dark'} />

        {/* Theme Toggle */}
        <View style={styles.toggleContainer}>
          <Text style={[styles.toggleText, { color: theme.text }]}>
            {isDark ? 'Dark Mode' : 'Light Mode'}
          </Text>
          <Switch
            value={isDark}
            onValueChange={() => setIsDark(!isDark)}
            thumbColor={isDark ? '#B3E5FC' : '#81D4FA'}
          />
        </View>

        {/* Profile */}
        <Image source={require('../../assets/images/profile.jpg')} style={styles.profileImage} />
        <Text style={[styles.name, { color: theme.text }]}>Yeruva Vedakshari</Text>
        <Text style={[styles.role, { color: theme.text }]}>Student</Text>

        {/* About Section */}
        <Text style={[styles.sectionTitle, { color: theme.text }]}>About Me</Text>
        <Text style={[styles.about, { color: theme.text }]}>
          Aspiring computer science engineer with hands-on experience in data science, machine
          learning, and web development. Skilled in Python, Java, SQL. Passionate about solving
          real-world problems with elegant technical solutions.
        </Text>

        {/* Portfolio Navigation */}
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Portfolio Sections</Text>
        <View style={styles.buttonGroup}>
          <Button title="Skills" onPress={() => router.push('/skills')} />
          <Button title="Education" onPress={() => router.push('/education')} />
        </View>

        <View style={styles.centeredButton}>
          <Button title="Projects" onPress={() => router.push('/projects')} />
        </View>

        <View style={styles.buttonGroup}>
          <Button title="Certifications" onPress={() => router.push('/certifications')} />
          <Button title="Participations" onPress={() => router.push('/participations')} />
        </View>

        {/* Contact Info */}
        <Text style={[styles.sectionTitle, { color: theme.text }]}>Contact</Text>
        <Text
          style={[styles.link, { color: theme.primary }]}
          onPress={() => Linking.openURL('mailto:vedakshari2999@gmail.com')}
        >
          Email: vedakshari2999@gmail.com
        </Text>
        <Text
          style={[styles.link, { color: theme.primary }]}
          onPress={() =>
            Linking.openURL('https://www.linkedin.com/in/vedakshari-yeruva-537247291/')
          }
        >
          LinkedIn
        </Text>
      </View>
    </ScrollView>
  );
}

// Themes
const lightTheme = {
  background: '#ffffff',
  text: '#000000',
  primary: '#81D4FA',
};

const darkTheme = {
  background: '#121212',
  text: '#ffffff',
  primary: '#B3E5FC',
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flexGrow: 1,
    padding: 24,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  toggleText: {
    marginRight: 8,
    fontSize: 14,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  role: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  about: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 10,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  centeredButton: {
    marginVertical: 15,
    alignItems: 'center',
  },
  link: {
    marginTop: 12,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
