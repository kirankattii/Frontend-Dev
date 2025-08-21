import { useEffect, useState } from 'react';

export default function BatteryStatus() {
  const [battery, setBattery] = useState(null);

  useEffect(() => {
    navigator.getBattery?.().then((battery) => {
      setBattery(battery.level);
    });
  }, []);

  return <p>Battery Level: {battery ? `${battery * 100}%` : "Not supported"}</p>;
}
