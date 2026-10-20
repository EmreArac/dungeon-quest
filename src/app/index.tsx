import { Cinzel_700Bold, useFonts } from '@expo-google-fonts/cinzel';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  BackHandler,
  Button,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { playClick, startMusic } from '../audio';
import GameBackground from '../components/GameBackground';

const logo = require('../../assets/images/logo.jpg');

export default function Screen1() {
  const router = useRouter();
  const [started, setStarted] = useState(false);
  const [fontsLoaded] = useFonts({ Cinzel_700Bold });

  const exitGame = () => {
    playClick();
    if (Platform.OS === 'android') {
      BackHandler.exitApp();
    } else {
      Alert.alert('Exit', 'Close the app by swiping it away.');
    }
  };

  const handleNewGame = async () => {
    playClick();
    await startMusic();
    setStarted(true);
  };

  if (!fontsLoaded) {
    return null;
  }

  if (!started) {
    return (
      <GameBackground>
        <View style={styles.logoBox}>
          <Image source={logo} style={styles.logo} />
        </View>
        <Text style={styles.gameTitle}>Dungeon Quest</Text>
        <Button title="New Game" color="#e0b84a" onPress={handleNewGame} />
        <Button title="Exit" color="#e0b84a" onPress={exitGame} />
      </GameBackground>
    );
  }

  return (
    <GameBackground>
      <Text style={styles.story}>
        The kingdom of Eldoria lies in darkness. The Shadow Lord has stolen the
        Crystal of Dawn, and you are the last hope. You stand at a crossroads at
        the edge of the Whispering Forest. A dark path leads into the trees, and
        a faint light glows from an old hermit's hut.
      </Text>
      <Button
        title="Enter the dark forest"
        color="#e0b84a"
        onPress={() => { playClick(); router.push('/screen2'); }}
      />
      <Button
        title="Visit the hermit's hut"
        color="#e0b84a"
        onPress={() => { playClick(); router.push('/screen3'); }}
      />
    </GameBackground>
  );
}

const styles = StyleSheet.create({
  logoBox: { width: 220, height: 260, overflow: 'hidden', borderRadius: 16 },
  logo: { width: 220, height: 394, marginTop: -67 },
  gameTitle: {
    color: '#fff',
    fontSize: 34,
    marginVertical: 12,
    fontFamily: 'Cinzel_700Bold',
  },
  story: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 12,
    fontFamily: 'Cinzel_700Bold',
  },
});