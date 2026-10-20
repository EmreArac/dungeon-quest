import { Cinzel_700Bold, useFonts } from '@expo-google-fonts/cinzel';
import { Stack } from 'expo-router';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({ Cinzel_700Bold });

  if (!fontsLoaded) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}