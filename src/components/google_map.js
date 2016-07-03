import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default (props) => {
  return (
    <GoogleMapLoader
      query={{ libraries: "geometry,drawing,places,visualization" }}
      containerElement={ <div style={{height: '100%'}} /> }
      googleMapElement={
        <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
      }
      />
  );
}
