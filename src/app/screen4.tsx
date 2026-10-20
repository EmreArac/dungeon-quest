import { useRouter } from 'expo-router';
import { Button, StyleSheet, Text } from 'react-native';
import { playClick } from '../audio';
import GameBackground from '../components/GameBackground';

export default function Screen4() {
  const router = useRouter();
  return (
    <GameBackground image={require('../../assets/images/screen4.jpg')}>
      <Text style={styles.title}>You have died</Text>
      <Text style={styles.story}>
        The Shadow Wolf proves too strong. Darkness swallows the forest, and
        your quest ends here. Eldoria remains lost in shadow.
      </Text>
      <Button
        title="Try again"
        color="#e0b84a"
        onPress={() => { playClick(); router.replace('/'); }}
      />
    </GameBackground>
  );
}

const styles = StyleSheet.create({
  title: { color: '#e55', fontSize: 28, marginBottom: 8, fontFamily: 'Cinzel_700Bold' },
  story: { color: '#fff', fontSize: 16, textAlign: 'center', lineHeight: 24, marginBottom: 12, fontFamily: 'Cinzel_700Bold' },
});