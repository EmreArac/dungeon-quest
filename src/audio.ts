import { AudioPlayer, createAudioPlayer, setAudioModeAsync } from 'expo-audio';
import { AppState, Platform } from 'react-native';

const MUSIC_VOLUME = 0.10; // 0 - 1
const CLICK_VOLUME = 0.03;  // 0 - 1

let music: AudioPlayer | null = null;
let clickPlayer: AudioPlayer | null = null;
let wasPlaying = false;
let listenersAdded = false;

// Pause the music when the app/tab loses focus, remember it was playing
function pauseMusic() {
  if (music && music.playing) {
    wasPlaying = true;
    music.pause();
  }
}

// Resume only if the music was playing before we paused it
function resumeMusic() {
  if (music && wasPlaying) {
    wasPlaying = false;
    music.play();
  }
}

function addFocusListeners() {
  if (listenersAdded) return;
  listenersAdded = true;

  // Phone: app goes to background / comes back (also works on web tab switch)
  AppState.addEventListener('change', (state) => {
    if (state === 'active') {
      resumeMusic();
    } else {
      pauseMusic();
    }
  });

  // Browser: switching to another window
  if (Platform.OS === 'web' && typeof window !== 'undefined') {
    window.addEventListener('blur', pauseMusic);
    window.addEventListener('focus', resumeMusic);
  }
}

// Background melody: starts once and loops
export async function startMusic() {
  try {
    if (music) return;
    await setAudioModeAsync({ playsInSilentMode: true });
    music = createAudioPlayer(require('../assets/audio/music.mp3'));
    music.loop = true;
    music.volume = MUSIC_VOLUME;
    addFocusListeners();
    music.play();
  } catch (e) {
    console.log('Music error:', e);
  }
}

// Sound effect for button presses
export async function playClick() {
  try {
    if (!clickPlayer) {
      clickPlayer = createAudioPlayer(require('../assets/audio/click.mp3'));
      clickPlayer.volume = CLICK_VOLUME;
    }
    await clickPlayer.seekTo(0);
    clickPlayer.play();
  } catch (e) {
    console.log('Click error:', e);
  }
}