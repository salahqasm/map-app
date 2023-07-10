import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import axios from 'axios';


mapboxgl.accessToken = 'pk.eyJ1Ijoic2FsYWhxYXNtIiwiYSI6ImNsand1eTJjYjAxM3gzZGxncTh3YWYya2gifQ.lbmjqKt4WL82TlXsYxpwEA';

function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(35.923962);
  const [lat, setLat] = useState(31.951569);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
    console.log(map);

  });


  async function search(e) {
    // https://api.mapbox.com/geocoding/v5/mapbox.places/amman%20jordan.json?&access_token=pk.eyJ1Ijoic2FsYWhxYXNtIiwiYSI6ImNsand1eTJjYjAxM3gzZGxncTh3YWYya2gifQ.lbmjqKt4WL82TlXsYxpwEA
    if (e.target.value != "") {
      let res = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${e.target.value}.json?&access_token=${mapboxgl.accessToken}`);
      let center = res?.data?.features[0]?.center;
      if (center) {
        mapContainer.current.innerHTML = "";
        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [center[0], center[1]],
          zoom: zoom
        })
      }
    } else {
      mapContainer.current.innerHTML = "";
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [35.923962, 31.951569],
        zoom: zoom
      })
    }
  }
  // 35.923962, 31.951569
  return (
    <div>

      <input onChange={e => search(e)} type='text' />

      <div ref={mapContainer} className="map-container" />
    </div>
    
  );
}

export default App;
