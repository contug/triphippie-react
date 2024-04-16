import styles from './TripList.module.scss';
import {Trip} from "../../model/Trip.ts";
import {TripTagItem} from "../TripTag/TripTagItem.tsx";

interface TripListProps {
    trips: Trip[];
}

export function TripList({trips}: TripListProps) {


    if (trips != null && trips.length > 0) {
        const tripElements = trips.map(trip =>
            <div className={styles.tripElement}>
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
            <span>No trips available</span>
        );
    }

}
