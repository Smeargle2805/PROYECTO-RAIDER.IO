export const getRegion = (latitude, longitude) => {
  if (latitude >= -56.0 && latitude <= 71.357 && longitude >= -180.0 && longitude <= -25.0) {
    return 'us';
  } else if (latitude >= 21.807 && latitude <= 25.621 && longitude >= 118.211 && longitude <= 122.036) {
    return 'tw';
  } else if (latitude >= 33.0041 && latitude <= 38.6239 && longitude >= 125.8875 && longitude <= 129.5843) {
    return 'kr';
  } else if (latitude >= 35.282 && latitude <= 71.357 && longitude >= -25.0 && longitude <= 40.0) {
    return 'eu';
  } else if (latitude >= 18.153 && latitude <= 53.560 && longitude >= 73.499 && longitude <= 134.775) {
    return 'cn';
  } else {
    return '';
  }
};