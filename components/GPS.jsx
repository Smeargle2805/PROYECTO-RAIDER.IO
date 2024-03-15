import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';

const LocationComponent = ({ onLocationChange }) => {
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permiso de ubicación no concedido');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      onLocationChange(location.coords);
    })();
  }, []);

  return null;
};

export default LocationComponent;
