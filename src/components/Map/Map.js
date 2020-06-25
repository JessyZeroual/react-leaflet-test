import React, { useState, useEffect } from "react";
import { Map as LeafletMap, Marker, Popup, TileLayer } from "react-leaflet";
import { StyledWrapperMap } from "./Map.styled";
import CurrentCityDetail from "./CurrentCityDetail";

const Map = ({ currentCity }) => {
  const [zoom, setZoom] = useState(7);
  const [latitude, setLatitude] = useState(40.7127837);
  const [longitude, setLongitude] = useState(-74.0059413);

  useEffect(() => {
    const animation = () => {
      setLatitude(currentCity.latitude);
      setLongitude(currentCity.longitude);
      setTimeout(() => {
        setZoom(7);
      }, 800);
    };
    setZoom(4);
    if (currentCity.latitude) animation();
  }, [currentCity]);

  return (
    <StyledWrapperMap>
      <LeafletMap center={[latitude, longitude]} zoom={zoom} minZoom={2}>
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <Marker position={[latitude, longitude]}>
          <Popup closeButton={false}>
            <CurrentCityDetail currentCity={currentCity} />
          </Popup>
        </Marker>
      </LeafletMap>
    </StyledWrapperMap>
  );
};

export default Map;
