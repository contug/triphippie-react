import styles from './Home.module.scss';
import Dashboard from "../../components/Dashboard/Dashboard.tsx";
import {TripDetails} from "../../components/TripDetails/TripDetails.tsx";
import {Outlet} from "react-router-dom";
function Home() {

    return (
        <div className={styles.home}>
            <Dashboard/>
            <Outlet/>
            <TripDetails/>
        </div>
    );
}

export default Home;
