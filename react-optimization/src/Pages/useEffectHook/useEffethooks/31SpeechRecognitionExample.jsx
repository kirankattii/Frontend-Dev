import React, { useEffect, useState } from "react";

export default function SpeechRecognitionExample() {
  const [text, setText] = useState("");

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setText("Speech Recognition not supported");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join("");
      setText(transcript);
    };
    recognition.start();

    return () => recognition.stop();
  }, []);

  return (
    <div className="p-6 bg-indigo-100 rounded-lg shadow-md">
      <h1 className="text-xl font-bold text-indigo-800 mb-4">Speech Recognition</h1>
      <p className="bg-white p-3 rounded shadow">{text}</p>
    </div>
  );
}


// Explanation

// Uses Web Speech API to capture speech input.
// Senior interview note: You must stop recognition in cleanup to avoid background recording.

