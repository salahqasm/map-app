import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Search from './Search-component/Search';
import Style from './Style-component/Style';
import Zoom from './Zoom-component/Zoom';
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: `mapbox://styles/mapbox/satellite-streets-v12`,
      center: [35.923962, 31.951569],
      zoom: 10,
    });
    localStorage.setItem('history', JSON.stringify([{
      name: "Amman, Jordan",
      center: [35.923962, 31.951569]
    }]))
    console.log("test");
  });

  // useEffect(() => {
  //   if (!map.current) return; // wait for map to initialize
  //   map.current.on('move', () => {
  //     setLng(map.current.getCenter().lng.toFixed(4));
  //     setLat(map.current.getCenter().lat.toFixed(4));
  //     setZoom(map.current.getZoom().toFixed(2));
  //   });
  // });

  return (
    <div className='mainDiv'>
      <div className='leftDiv'>
        <Search map={map} />
      </div>
      <div className='rightDiv'>
        {/* <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div> */}
        <Style map={map} />
        <div ref={mapContainer} className="map-container" />
        <br />
        <Zoom map={map} />
      </div>
    </div>

  );
}

export default App;
