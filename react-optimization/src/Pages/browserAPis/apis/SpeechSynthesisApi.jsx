export default function SpeechDemo() {
  const speak = () => {
    const utter = new SpeechSynthesisUtterance("Hello, this is a test from React!");
    speechSynthesis.speak(utter);
  };

  return <button onClick={speak}>Speak</button>;
}
