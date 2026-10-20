import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text } from 'react-native';
import { playClick } from '../audio';
import GameBackground from '../components/GameBackground';

export default function Screen3() {
  const router = useRouter();
  return (
    <GameBackground image={require('../../assets/images/screen3.jpg')}>
      <Text style={styles.story}>
        An old hermit welcomes you into his hut. "The Shadow Lord's fortress
        lies beyond the mountains," he whispers. "The forest road is guarded by
        a beast, but I know a secret mountain path that leads straight to the
        fortress gates." He offers you a warm meal and a choice.
      </Text>
      <Button
        title="Return to the crossroads"
        color="#e0b84a"
        onPress={() => { playClick(); router.replace('/'); }}
      />
      <Button
        title="Take the secret mountain path"
        color="#e0b84a"
        onPress={() => { playClick(); router.push('/screen5'); }}
      />
    </GameBackground>
  );
}

const styles = StyleSheet.create({
  story: { color: '#fff', fontSize: 16, textAlign: 'center', lineHeight: 24, marginBottom: 12, fontFamily: 'Cinzel_700Bold' },
});