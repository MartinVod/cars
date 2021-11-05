import React from 'react';
import GoogleMapReact from 'google-map-react';
import BusIcon from '../assets/icons/bus.svg';
import { drivers } from '../data/driver.json';


const DriversMap = ({ center = { lat: 35.2, lng: 31.8 }, zoom = 11 }) => {
  return (
    <GoogleMapReact google={null} defaultCenter={center} defaultZoom={zoom}>
      {drivers
        .filter(({ lat, long }) => lat && long)
        .map(({ lat, long, id }) => (
          <img
            key={id}
            lat={lat + Math.random() / 40000}
            lng={long + Math.random() / 40000} //
            // I decided to modify the number a bit so incase there are multiple drivers on the exact same coordinate you will manage to see more than just 1 icon (if zoom in close enough)
            style={styles.iconMap}
            text="driver"
            alt="driver icons"
            src={BusIcon}
          />
        ))}
    </GoogleMapReact>
  );
};

const styles = {
  iconMap: {
    height: 30,
    width: 30,
  },
};

export default DriversMap;
