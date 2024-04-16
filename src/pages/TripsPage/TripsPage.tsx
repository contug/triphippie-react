import Dashboard from "../../components/Dashboard/Dashboard.tsx";
import {TripDetails} from "../../components/TripDetails/TripDetails.tsx";
import {TripsMenu} from "../../components/TripsMenu/TripsMenu.tsx";
import styles from './TripsPage.module.scss';

export function TripsPage() {
    return (
        <div className={styles.tripsPageContainer}>
            <Dashboard>
                <TripsMenu/>
            </Dashboard>
            <TripDetails/>
        </div>
    );
}
