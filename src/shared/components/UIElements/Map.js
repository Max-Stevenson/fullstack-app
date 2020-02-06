import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const styles = {
  width: "100%",
  height: "100%",
};

const Map = (props) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  const { center, zoom } = props;

  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoibXMwMTAxIiwiYSI6ImNqejdiZmM4NTE1NnMzZnF0YzBqaWxlM2UifQ.JiH70gxGPj0sIVQyd10Y1w";
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: zoom
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map, center, zoom]);

  return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default Map;