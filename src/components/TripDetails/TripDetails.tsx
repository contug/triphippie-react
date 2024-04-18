import styles from './TripDetails.module.scss';
import {TripsMap} from "../TripsMap/TripsMap.tsx";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux-hooks.ts";
import {findTripById} from "../../store/tripSlice.ts";
import {Trip} from "../../model/Trip.ts";


export function TripDetails() {

    const {tripId} = useParams<{ tripId: string }>();

    const trip: Trip | undefined = useAppSelector(state => findTripById(state.trips, tripId || ''));

    console.log(tripId)
    return (
        (trip && tripId) && <div className={styles.tripDetailsContainer}>
            <TripsMap trip={trip}/>
            <div className={styles.tripDetails}>
                trip details
            </div>

        </div>

    );
}
