import { useState } from "react";

export default function GeoLocation() {
  const [location, setLocation] = useState(null);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      });
    });
  };

  return (
    <>
      <button
        className="rounded-xl p-2 text-xl bg-gray-300 border border-blue-300"
        onClick={getLocation}
      >
        Get Location
      </button>
      {location && (
        <p>
          Lat: {location.lat}, Lon: {location.lon}
        </p>
      )}
    </>
  );
}
