import React, { useState } from "react";
import { Map, Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";
import Image from "next/image";

const Maps = ({ searchResults }) => {
  // Transform the search results object into the {latitude: 37.7577, longitude: -122.4376} object
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // The latitude and longitude of the center of locations coordinates
  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  const [popupInfo, setPopupInfo] = useState({});

  return (
    <Map
      mapStyle="mapbox://styles/noobmaster432/clckfvn9r001k14mfle0xj9hh"
      mapboxAccessToken={process.env.mapbox_key}
      initialViewState={{ ...viewport }}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults?.map((result) => (
        <div key={result.long}>
          <Marker
            key={result.long}
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
              onMouseEnter={() => setPopupInfo(result)}
              onMouseLeave={() => setPopupInfo({})}
            >
              📌
            </p>
          </Marker>

          {/* The popup that should show if we enter a marker */}
          {popupInfo.long === result.long ? (
            <Popup
              closeOnClick={false}
              longitude={result.long}
              latitude={result.lat}
              onClose={() => setPopupInfo(null)}
            >
              <div className="relative -m-3 -mb-[15px] text-xs capitalize">
                <div className="opacity-85 relative h-32 w-44">
                  <Image
                    alt="place"
                    src={result.img ? result.img : "https://picsum.photos/200/300"}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="absolute bottom-0 w-full rounded-b-md bg-white bg-opacity-70 bg-clip-padding py-1 px-3 font-sans backdrop-blur-sm ">
                  <p className="font-semibold">{result.title}</p>
                  <p className="text-[10px] font-light leading-4 text-gray-700">
                    {result.location}
                  </p>
                </div>
              </div>
            </Popup>
          ) : null}
        </div>
      ))}
    </Map>
  );
};

export default Maps;
