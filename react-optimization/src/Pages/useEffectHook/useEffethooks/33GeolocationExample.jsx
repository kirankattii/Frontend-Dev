import React, { useEffect, useState } from "react";

export default function GeolocationExample() {
  const [location, setLocation] = useState({ lat: null, lng: null });

  useEffect(() => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }
    const watcher = navigator.geolocation.watchPosition(
      (pos) => {
        setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      },
      (err) => console.error(err),
      { enableHighAccuracy: true }
    );
    return () => navigator.geolocation.clearWatch(watcher);
  }, []);

  return (
    <div className="p-6 bg-yellow-100 rounded-lg shadow-md">
      <h1 className="text-xl font-bold text-yellow-800 mb-4">Your Location</h1>
      <p>Latitude: {location.lat}</p>
      <p>Longitude: {location.lng}</p>
    </div>
  );
}
