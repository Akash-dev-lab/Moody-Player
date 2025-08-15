import { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import { Play } from "lucide-react";
import axios from 'axios'

const MoodyPlayer = () => {
  const videoRef = useRef(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [mood, setMood] = useState("");
  const [songs, setSongs] = useState([]);
  const API = import.meta.env.VITE_API_URL; 

  // Load face-api.js models
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models";
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      ]);
      setModelsLoaded(true);
    };
    loadModels();
  }, []);

  // Start camera
  useEffect(() => {
    if (modelsLoaded) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => videoRef.current.srcObject = stream
        )
        .catch((err) => console.error("Camera error:", err));
    }
  }, [modelsLoaded]);

  // Detect mood
  const handleDetectMood = async () => {
    if (!modelsLoaded || !videoRef.current) return;

    const detections = await faceapi
      .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

    let detectedMood = "No face detected 😵";

    if (detections && detections.expressions) {
      const sorted = Object.entries(detections.expressions).sort(
        (a, b) => b[1] - a[1]
      );
      detectedMood = sorted[0][0]; // highest probability expression
    }
    setMood(detectedMood);

    axios.get(`${API}/songs?mood=${detectedMood}`)
      .then(res => {
        let allSongs = res.data.Songs
        setSongs(allSongs)
      })
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center p-4">
      <div className="w-full max-w-8xl border border-blue-500 rounded-xl p-6 space-y-6">

        {/* Camera & Detect Mood */}
        <div className="flex flex-col md:flex-row gap-4 lg:w-[80%] justify-between items-center">
          {/* Camera Box */}
          <div className="flex justify-center border border-red-400 rounded-lg w-full h-64 sm:h-72 lg:h-auto md:h-96 lg:w-[60%] relative">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover rounded-lg"
            />
            {!modelsLoaded && (
              <span className="absolute text-red-400 font-semibold">
                Loading models...
              </span>
            )}
          </div>

          {/* Detect Mood Button */}
          <div className="flex flex-col items-center space-y-6">
            <button
              onClick={handleDetectMood}
              className="relative w-full md:w-auto px-6 py-3 rounded-lg cursor-pointer 
             text-green-400 font-russo text-2xl text-center
             bg-gray-800/5 backdrop-blur-md shadow-lg shadow-green-500/10
             hover:text-white transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Detect Mood</span>

              {/* Animated border */}
              <span className="absolute inset-1 rounded-lg p-[2px] bg-gradient-to-r from-black via-transparent to-green-900 
                   animate-border-spin"></span>

              {/* Inner background so border is visible */}
              <span className="absolute inset-[3px] rounded-lg bg-gray-800/5 backdrop-blur-md"></span>
            </button>


            <p className="font-comfortaa">Play Music According to your mood 😍</p>
          </div>
        </div>

        {/* Show mood */}
        {mood && (
          <p className="text-center lg:text-4xl text-green-400">
            <span className="text-white font-russo">Mood:</span> <span className="font-bold font-orbitron">{mood}</span>
          </p>
        )}

        {/* Recommended Songs */}
        <div>
          <h2 className="font-russo tracking-wider lg:text-4xl md:text-2xl sm:4xl mb-4 font-semibold">
            Recommended Songs
          </h2>
          <div className="space-y-2">
            {songs.length > 0 ? (
              songs.map((song) => (
                <div
                  key={song._id}
                  className="flex justify-between items-center border cursor-pointer border-yellow-600 rounded-md px-4 py-3 hover:bg-yellow-900 transition"
                >
                  <span className="text-yellow-400 font-comfortaa font-semibold">
                    {song.title}
                  </span>
                  <button  onClick={() => window.open(song.image, "_blank")} className="border font-comfortaa border-yellow-500 rounded-full p-1 hover:bg-yellow-500 hover:text-black transition">
                    <Play size={18} />

                  </button>
                </div>
              ))
            ) : (
              <p className="text-yellow-400 font-comfortaa text-center">Detect Your Mood then Songs will appear here..</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MoodyPlayer;
