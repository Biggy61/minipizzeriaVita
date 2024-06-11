// src/MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker icon issue with Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapComponent = (props) => {
  const position = [50.41796576094032, 14.913899338070667];

  return (
     <>
     <div className='map-section'>
      <div className='gmap-frame'>
      <iframe width={props.width} height={props.height} frameborder="" scrolling="no" marginheight="0" marginwidth="" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Laurinova%201268,%20293%2001%20Mlad%C3%A1%20Boleslav+(Mini%20pizzeria%20VITA)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
      </div>
     </div>
     </>
  );
};

export default MapComponent;
