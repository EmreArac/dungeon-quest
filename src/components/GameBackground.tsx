import { ReactNode } from 'react';
import {
    Image,
    ImageBackground,
    ImageSourcePropType, ScrollView,
    StyleSheet, useWindowDimensions,
} from 'react-native';

type Props = {
  children: ReactNode;
  image?: ImageSourcePropType;
};

export default function GameBackground({ children, image }: Props) {
  const { height } = useWindowDimensions();
  const imageHeight = Math.min(240, height * 0.3);

  return (
    <ImageBackground
      source={require('../../assets/images/background.jpg')}
      style={styles.background}
      imageStyle={styles.bgImage}
    >
      <ScrollView style={styles.overlay} contentContainerStyle={styles.content}>
        {image && (
          <Image
            source={image}
            style={[styles.sceneImage, { height: imageHeight }]}
            resizeMode="cover"
          />
        )}
        {children}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  bgImage: { resizeMode: 'cover', width: '100%', height: '100%' },
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.45)' },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: 24,
  },
  sceneImage: {
    width: '100%',
    maxWidth: 480,
    borderRadius: 12,
  },
});