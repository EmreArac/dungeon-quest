import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text } from 'react-native';
import { playClick } from '../audio';
import GameBackground from '../components/GameBackground';

export default function Screen5() {
  const router = useRouter();
  return (
    <GameBackground image={require('../../assets/images/screen5.jpg')}>
      <Text style={styles.story}>
        You reach the gates of the Shadow Lord's fortress. The guards are gone,
        and in the great hall the Crystal of Dawn glows on a stone altar. The
        Shadow Lord is nowhere to be seen. Only a few steps remain between you
        and victory.
      </Text>
      <Button
        title="Take the Crystal of Dawn"
        color="#e0b84a"
        onPress={() => { playClick(); router.push('/victory'); }}
      />
    </GameBackground>
  );
}

const styles = StyleSheet.create({
  story: { color: '#fff', fontSize: 16, textAlign: 'center', lineHeight: 24, marginBottom: 12, fontFamily: 'Cinzel_700Bold' },
});