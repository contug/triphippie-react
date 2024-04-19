import Dashboard from "../../components/Dashboard/Dashboard.tsx";
import {TripsMenu} from "../../components/TripsMenu/TripsMenu.tsx";
import styles from './TripsPage.module.scss';
import {Outlet} from "react-router-dom";

export function TripsPage() {


    return (
        <div className={styles.tripsPageContainer}>
            <Dashboard>
                <TripsMenu/>
            </Dashboard>
            <Outlet/>
        </div>
    );
}
