import { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import { Play } from "lucide-react";

const MoodyPlayer = () => {
  const videoRef = useRef(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [mood, setMood] = useState("");

  const songs = [
    { id: 1, title: "Song 1" },
    { id: 2, title: "Song 2" },
    { id: 3, title: "Song 3" },
  ];

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
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => console.error("Camera error:", err));
    }
  }, [modelsLoaded]);

  // Detect mood
  const handleDetectMood = async () => {
    if (!modelsLoaded || !videoRef.current) return;

    const detections = await faceapi
      .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

    if (detections && detections.expressions) {
      const sorted = Object.entries(detections.expressions).sort(
        (a, b) => b[1] - a[1]
      );
      setMood(sorted[0][0]); // highest probability expression
    } else {
      setMood("No face detected");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center p-4">
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
            className="w-full md:w-auto px-6 py-3 border border-dotted font-russo border-green-500 rounded-lg cursor-pointer text-green-400 hover:bg-green-500 hover:text-black transition font-medium text-center"
          >
            Detect Mood
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
            {songs.map((song) => (
              <div
                key={song.id}
                className="flex justify-between items-center border border-yellow-600 rounded-md px-4 py-3 hover:bg-yellow-900 transition"
              >
                <span className="text-yellow-400 font-comfortaa font-semibold">
                  {song.title}
                </span>
                <button className="border font-comfortaa border-yellow-500 rounded-full p-1 hover:bg-yellow-500 hover:text-black transition">
                  <Play size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MoodyPlayer;
