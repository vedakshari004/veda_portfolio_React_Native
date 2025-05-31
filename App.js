// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import CertificationsScreen from './app/certifications';
import EducationScreen from './app/education';
import ParticipationsScreen from './app/participations';
import ProjectsScreen from './app/projects';
import SkillsScreen from './app/skills';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Skills" component={SkillsScreen} />
        <Stack.Screen name="Education" component={EducationScreen} />
        <Stack.Screen name="Projects" component={ProjectsScreen} />
        <Stack.Screen name="Certifications" component={CertificationsScreen} />
        <Stack.Screen name="Participations" component={ParticipationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
