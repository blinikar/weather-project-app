import React, {useRef, useState} from "react";
import styles from "pages/MapPage/MapPage.module.scss";
import {useMapPageLogic} from "pages/MapPage/MapPage.logic";
import {SearchBar} from "components/SearchBar";
import {YMaps, Map, Placemark, SearchControl, ZoomControl, GeolocationControl} from "react-yandex-maps";

export interface MapPageProps {
}

export const MapPage: React.FunctionComponent<MapPageProps> = (props) => {

    const [placeCoordinates, setPlaceCoordinates] = useState<number[]>([55.753358, 48.743491])
    const [placeAddress, setPlaceAddress] = useState<string> ("здеся")

    const myGeometry = [55.753358, 48.743491];

    const [data, setData] = useState<string>("");

    return <div className={styles["map-page"]}>
        {data}
        <SearchBar placeholder={"Find your city"}/>
        <div className={styles["map"]}>
            <YMaps
                id="y_map"
                query={{
                    apikey: "993c25d0-41a6-401b-9acc-8a9f6596a65b",
                    lang: "en_US"
                }}
            >
                <Map
                    modules={["geocode"]}
                    defaultState={{center: placeCoordinates, zoom: 16}} width={"100%"} height={"100%"}
                    onClick = {(e: any) => setPlaceCoordinates(e.get("coords"))}>
                    <SearchControl
                        onChange={(e: any) => {console.log(e)}}
                        options={{noPlacemark : "true"}}
                    />
                    <ZoomControl/>
                    <GeolocationControl/>
                    <Placemark
                        geometry={placeCoordinates}
                        options={{draggable: "true"}}
                        properties={{ balloonContent : placeAddress }}
                        onDragEnd={(e: any) => { setPlaceCoordinates(e.originalEvent.target.geometry._coordinates); } }
                    />
                </Map>
            </YMaps>
        </div>
    </div>

}
