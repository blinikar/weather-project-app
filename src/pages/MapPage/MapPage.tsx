import React, { useRef, useState } from "react";
import styles from "pages/MapPage/MapPage.module.scss";
import { useMapPageLogic } from "pages/MapPage/MapPage.logic";
import { SearchBar } from "components/SearchBar";
import {
  YMaps,
  Map,
  Placemark,
  SearchControl,
  ZoomControl,
  GeolocationControl,
  Button,
} from "react-yandex-maps";
import { useNavigate } from "react-router-dom";

export interface MapPageProps {}

export const MapPage: React.FunctionComponent<MapPageProps> = (props) => {
  const [placeCoordinates, setPlaceCoordinates] = useState<number[]>([
    55.753358, 48.743491,
  ]);

  const myGeometry = [55.753358, 48.743491];

  const [data, setData] = useState<string>("");

  const navigate = useNavigate();

  function showWeather() {
    const coords = `${Math.round(placeCoordinates[0] * 10000) / 10000},${
      Math.round(placeCoordinates[1] * 10000) / 10000
    }`;
    navigate(`/${coords}`);
  }

  const onInstanceRef = (ref: any) => {
    if (ref !== null) {
      ref.events.add("resultshow", (e: any) => {
        const index = e.get("index");
        ref.getResult(index).then((res: any) => {
          setPlaceCoordinates(res.geometry.getCoordinates() as number[]);
        });
      });
    }
  };

  return (
    <div className={styles["map-page"]}>
      {data}
      <SearchBar placeholder="Find your city" />
      <div className={styles.map}>
        <YMaps
          id="y_map"
          query={{
            apikey: "993c25d0-41a6-401b-9acc-8a9f6596a65b",
            lang: "en_US",
          }}
        >
          <Map
            /* onActionEnd = {(e: any) => {
                        console.log(e);
                    }} */
            modules={["geocode"]}
            defaultState={{ center: placeCoordinates, zoom: 16 }}
            width="100%"
            height="100%"
            onClick={(e: any) => {
              setPlaceCoordinates(e.get("coords"));
            }}
          >
            <SearchControl
              options={{ noPlacemark: "true" }}
              instanceRef={onInstanceRef}
            />
            <ZoomControl />
            <GeolocationControl />
            <Placemark
              geometry={placeCoordinates}
              options={{ draggable: "true" }}
              onDragEnd={(e: any) => {
                setPlaceCoordinates(
                  e.originalEvent.target.geometry._coordinates,
                );
              }}
            />
            <Button
              data={{
                content: "Find weather on marker",
              }}
              options={{
                maxWidth: 256,
              }}
              onClick={() => {
                showWeather();
              }}
            />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};
