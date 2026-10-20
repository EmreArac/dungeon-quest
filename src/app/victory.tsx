import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text } from 'react-native';
import { playClick } from '../audio';
import GameBackground from '../components/GameBackground';

export default function Victory() {
  const router = useRouter();
  return (
    <GameBackground image={require('../../assets/images/victory.jpg')}>
      <Text style={styles.title}>Victory!</Text>
      <Text style={styles.story}>
        The Crystal of Dawn lights up the sky, and the shadows over Eldoria
        fade away. The kingdom is saved, and your name will be remembered
        forever.
      </Text>
      <Button
        title="Play again"
        color="#e0b84a"
        onPress={() => { playClick(); router.replace('/'); }}
      />
    </GameBackground>
  );
}

const styles = StyleSheet.create({
  title: { color: '#fd3', fontSize: 32, marginBottom: 8, fontFamily: 'Cinzel_700Bold' },
  story: { color: '#fff', fontSize: 16, textAlign: 'center', lineHeight: 24, marginBottom: 12, fontFamily: 'Cinzel_700Bold' },
});