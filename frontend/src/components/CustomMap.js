import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import westerosMap from '../assets/westeros_map.jpeg';

class CustomMap extends React.Component {
  componentDidMount() {
    const mapElement = document.getElementById('map');
    if (!mapElement) {
      console.error('Map container element not found');
      return;
    }

    this.map = L.map(mapElement, {
      center: [0, 0],
      zoom: 2,
      crs: L.CRS.Simple
    });

    const bounds = [[0, 0], [1280, 720]];
    L.imageOverlay(westerosMap, bounds).addTo(this.map);
    this.map.fitBounds(bounds);

    console.log('Map initialized successfully');
  }

  componentWillUnmount() {
    if (this.map) {
      this.map.remove();
    }
  }

  render() {
    return <div id="map" style={{ height: '600px', width: '100%' }}></div>;
  }
}

export default CustomMap;
