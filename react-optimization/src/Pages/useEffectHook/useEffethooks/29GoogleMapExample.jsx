import React, { useEffect, useRef } from "react";

export default function GoogleMapExample() {
  const mapRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAXbrYabe24gKhUIapgZEzeEdSmgVqDqUE`;
    script.async = true;
    script.onload = () => {
      new window.google.maps.Map(mapRef.current, {
        center: { lat: 40.7128, lng: -74.006 },
        zoom: 10,
      });
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">Google Map</h1>
      <div ref={mapRef} className="w-full h-64 rounded-lg"></div>
    </div>
  );
}


// Explanation

// Loads Google Maps script dynamically and initializes it.
// Senior-level note: Always clean up external scripts and ensure they load only once.