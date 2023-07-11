import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions"
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css"
import Search from './Search-component/Search';
import Style from './Style-component/Style';
import Zoom from './Zoom-component/Zoom';


mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'metric',
    profile: 'mapbox/driving'
  });

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
    mapboxgl.setRTLTextPlugin(
      'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
      null,
      true);
    map?.current?.addControl(directions, 'top-left');

  }, []);

  return (
    <div className='mainDiv'>
      <div className='leftDiv'>
        <Search map={map} />
      </div>
      <div className='rightDiv'>

        <Style map={map} />
        <div ref={mapContainer} className="map-container" />
        <br />
        <Zoom map={map} />
        
      </div>
    </div >

  );
}

export default App;
