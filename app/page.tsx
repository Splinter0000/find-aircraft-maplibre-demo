'use client';
import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';

export default function Home() {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return;
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [-46.6333, -23.5505], // São Paulo
      zoom: 3,
      projection: { name: "globe" }
    });

    new maplibregl.Marker().setLngLat([-46.6333, -23.5505]).addTo(map);

    return () => map.remove();
  }, []);

  return (
    <main style={{ width: "100%", height: "100vh" }}>
      <h1 style={{ position: "absolute", zIndex: 1, background: "white", padding: "8px" }}>Find Aircraft Demo</h1>
      <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />
    </main>
  );
}
