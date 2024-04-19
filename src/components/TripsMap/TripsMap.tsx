import {MapContainer} from 'react-leaflet/MapContainer'
import {TileLayer} from 'react-leaflet/TileLayer'
import {Marker, Popup, useMap} from "react-leaflet";

import styles from './TripsMap.module.scss'
import {Trip} from "../../model/Trip.ts";

interface TripsMapProps {
    trip: Trip;
}

/**
 * Interface for the ChangeView component
 * @param lat - the new latitude
 * @param lng - the new longitude
 * @param zoom - the new zoom level: 0 - furthest, 18 - closest
 */
interface ChangeViewProps {
    lat: number;
    lng: number;
    zoom: number;
}

/**
 * Calls the useMap hook inside the MapContainer that provides the leaflet context, navigates to the new marker on every rerender
 * @param ChangeViewProps - the new coordinates and zoom level
 */
function ChangeView({lat, lng, zoom}: ChangeViewProps) {
    const map = useMap();
    map.setView({lat, lng}, zoom);
    return null;
}

export function TripsMap({trip}: TripsMapProps) {

    const zoomLevel = 7;

    return (
        <div className={styles.leafletContainer}>
            <MapContainer
                center={[trip.latitude, trip.longitude]}
                zoom={zoomLevel}
                scrollWheelZoom={false}
                attributionControl={false}
                style={{
                    height: "100%",
                    borderRadius: "2rem"
                }}>
                <ChangeView lat={trip.latitude} lng={trip.longitude} zoom={zoomLevel}/>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[trip.latitude, trip.longitude]}>
                    <Popup>
                        {trip.name}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>

    );
}
