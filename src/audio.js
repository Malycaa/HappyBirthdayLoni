// src/audio.js
const audio = new Audio('/1.mp3'); // file mp3 di public/bg.mp3
audio.loop = true;
audio.muted = false; // biar langsung unmuted pas manual play

export const playAudio = () => {
  audio.play();
};

export const pauseAudio = () => {
  audio.pause();
};
