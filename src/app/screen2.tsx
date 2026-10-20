import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { playClick } from '../audio';
import GameBackground from '../components/GameBackground';

const rollDie = () => Math.floor(Math.random() * 6) + 1;

export default function Screen2() {
  const router = useRouter();
  const [playerRoll, setPlayerRoll] = useState<number | null>(null);
  const [enemyRoll, setEnemyRoll] = useState<number | null>(null);

  const rolled = playerRoll !== null && enemyRoll !== null;
  const won = rolled && playerRoll > enemyRoll;
  const lost = rolled && playerRoll < enemyRoll;
  const tie = rolled && playerRoll === enemyRoll;

  const fight = () => {
    playClick();
    setPlayerRoll(rollDie());
    setEnemyRoll(rollDie());
  };

  return (
    <GameBackground image={require('../../assets/images/screen2.jpg')}>
      <Text style={styles.story}>
        Deep in the Whispering Forest, a Shadow Wolf leaps out of the darkness,
        its eyes burning like embers. There is no way to run. Roll the dice:
        whoever rolls higher wins the fight. If you lose, you die!
      </Text>

      {rolled && (
        <View style={styles.rolls}>
          <Text style={styles.roll}>You rolled: {playerRoll}</Text>
          <Text style={styles.roll}>Wolf rolled: {enemyRoll}</Text>
        </View>
      )}

      {!rolled && <Button title="Roll the dice" color="#e0b84a" onPress={fight} />}

      {tie && (
        <>
          <Text style={styles.result}>A tie! You circle each other...</Text>
          <Button title="Roll again" color="#e0b84a" onPress={fight} />
        </>
      )}

      {won && (
        <>
          <Text style={[styles.result, { color: '#6c6' }]}>You defeated the wolf!</Text>
          <Button
            title="Continue to the fortress"
            color="#e0b84a"
            onPress={() => { playClick(); router.replace('/screen5'); }}
          />
        </>
      )}

      {lost && (
        <>
          <Text style={[styles.result, { color: '#e55' }]}>The wolf was stronger...</Text>
          <Button
            title="Face your fate"
            color="#e0b84a"
            onPress={() => { playClick(); router.replace('/screen4'); }}
          />
        </>
      )}
    </GameBackground>
  );
}

const styles = StyleSheet.create({
  story: { color: '#fff', fontSize: 16, textAlign: 'center', lineHeight: 24, marginBottom: 12, fontFamily: 'Cinzel_700Bold' },
  rolls: { alignItems: 'center', gap: 4, marginBottom: 8 },
  roll: { color: '#fff', fontSize: 20, fontFamily: 'Cinzel_700Bold' },
  result: { color: '#fff', fontSize: 18, marginVertical: 8, fontFamily: 'Cinzel_700Bold' },
});