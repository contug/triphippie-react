import styles from './TripList.module.scss';
import {Trip} from "../../model/Trip.ts";
import {TripTagItem} from "../TripTag/TripTagItem.tsx";
import {useNavigate, useParams} from "react-router-dom";

interface TripListProps {
    trips: Trip[];
}

export function TripList({trips}: TripListProps) {

    const navigate = useNavigate();

    const {tripId} = useParams<{ tripId: string }>()
    const handleTripSelection = (trip: Trip) => {
        navigate(`/dashboard/trips/${trip.id}`);
    }


    if (trips != null && trips.length > 0) {
        const tripElements = trips.map(trip =>
            <div className={`${styles.tripElement} ${tripId == trip.id ? styles.tripElementSelected : ''}`} tabIndex={0}
                 onClick={() => handleTripSelection(trip)}>
                <header className={styles.tripElementHeader}>
                    <span className={styles.tripElementHeaderText}>{trip.name}</span>
                    <span
                        className={styles.tripElementHeaderDate}>{new Date(trip.startDate).toLocaleDateString()}</span>
                </header>
                <span className={styles.tripElementTags}>{trip.tags.map(tag => <TripTagItem tripTag={tag}/>)}</span>
            </div>
        )


        return (

            <div className={styles.tripListContainer}>
                {(trips && trips.length > 0) &&
                    tripElements
                }
            </div>)
    } else {
        return (
            <div className={styles.noResults}>No trips available</div>
        );
    }

}
