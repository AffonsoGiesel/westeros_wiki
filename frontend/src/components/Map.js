// MAPA DESCONTINUADO PORQUE APARENTEMENTE WESTEROS NÃO EXISTE NO MUNDO REAL. DAQUI A POUCO VÃO FALAR QUE DRAGÕES SÃO MITOS TAMBÉM

import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

class Map extends React.Component {
  componentDidMount() {
    this.map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
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

export default Map;
