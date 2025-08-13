import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

const MoodPlayer = () => {
  const videoRef = useRef(null);
  const [currentMood, setCurrentMood] = useState("neutral");
  const [audio, setAudio] = useState(null);

  const moodToMusic = {
    happy: "/assets/music/happy.mp3",
    sad: "/assets/music/sad.mp3",
    angry: "/assets/music/angry.mp3",
    neutral: "/assets/music/neutral.mp3",
  };

  const getTopExpression = (expressions) => {
    return Object.entries(expressions)
      .sort((a, b) => b[1] - a[1])[0][0];
  };

  const startVideo = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: {} });
    videoRef.current.srcObject = stream;
  };

  const loadModels = async () => {
    const MODEL_URL = "/models";
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
  };

  const detectMood = async () => {
    const detection = await faceapi
      .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

      console.log(detection)

    if (detection && detection.expressions) {
      const mood = getTopExpression(detection.expressions);
      if (mood !== currentMood) {
        setCurrentMood(mood);
        playMusicForMood(mood);
      }
    }
  };

  const playMusicForMood = (mood) => {
    if (audio) {
      audio.pause();
    }
    const newAudio = new Audio(moodToMusic[mood] || moodToMusic["neutral"]);
    newAudio.play();
    setAudio(newAudio);
  };

  useEffect(() => {
    loadModels().then(startVideo);

    const interval = setInterval(() => {
      detectMood();
    }, 500); // check every 5 seconds

    return () => clearInterval(interval);
  }, [5]);

  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-bold">🎧 Mood Detection Music Player</h2>
      <p className="mt-2">Current Mood: <span className="font-semibold">{currentMood}</span></p>
      <video ref={videoRef} autoPlay muted width="400" height="300" className="mx-auto mt-4 rounded-md shadow-lg" />
    </div>
  );
};

export default MoodPlayer;