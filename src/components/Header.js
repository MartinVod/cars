import React, { useEffect, useState, useCallback } from 'react';

import ClipLoader from 'react-spinners/ClipLoader';

import { getLocation } from '../utils/api';

import './Header.css';

export default function Header() {
  const [location, setLocation] = useState(null);

  const triggerLocation = useCallback(async () => {
    let res = await getLocation();
    if (res?.success && res?.data?.iss_position) {
      setLocation(res?.data?.iss_position);
    }
  }, []);

  useEffect(() => {
    let locationInterval = setInterval(triggerLocation, 1000);


    return () => clearInterval(locationInterval);
  }, [triggerLocation]);

  return (
    <div className="header-container">
      {!location ? (
        <div>
          <ClipLoader color={'#6dd5cb'} size={50} />
        </div>
      ) : (
        <div className="text-header">
          <p className="title">Live Space Station Location:</p>
          <div className="coordinate-value-container">
            <span className="coordinate-key">lat: </span>
            <span className="coordinate-value">{location?.latitude ?? 0}</span>
          </div>
          <div className="coordinate-value-container">
            <span className="coordinate-key">lang:</span>
            <span className="coordinate-value">{location?.longitude ?? 0}</span>
          </div>
        </div>
      )}
    </div>
  );
}
