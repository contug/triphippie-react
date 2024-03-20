import styles from './Dashboard.module.scss';
import menuIcon from '../../assets/menu.svg';
import messageIcon from '../../assets/message-text.svg';
import settingsIcon from '../../assets/settings.svg';
import logoutIcon from '../../assets/log-out.svg';
import {useState} from "react";
import {TripsMenu} from "../TripsMenu/TripsMenu.tsx";

enum ActiveDashboardChild {
    tripList,
    messages,
    settings,
    logout
}

function selectDashboardChild(activeChild: ActiveDashboardChild) {
    switch (activeChild) {
        case ActiveDashboardChild.tripList:
            return <TripsMenu/>
        case ActiveDashboardChild.messages:
            return <div>Messages</div>
        case ActiveDashboardChild.settings:
            return <div>Settings</div>
        case ActiveDashboardChild.logout:
            return <div>Logout</div>
    }
}

export default function Dashboard() {

    const [activeChild, setActiveChild] = useState<ActiveDashboardChild>(0)

    return (
        <div className={styles.dashboard}>
            <nav className={styles.dashboardHeader}>
                <img
                    className={`${activeChild === 0 ? styles.dashboardHeaderIconActive : ''} ` + styles.dashboardHeaderIcon}
                    src={menuIcon} alt="menu"
                    onClick={() => setActiveChild(0)}
                />
                <img
                    className={`${activeChild === 1 ? styles.dashboardHeaderIconActive : ''} ` + styles.dashboardHeaderIcon}
                    src={messageIcon} alt="messages"
                    onClick={() => setActiveChild(1)}
                />
                <img
                    className={`${activeChild === 2 ? styles.dashboardHeaderIconActive : ''} ` + styles.dashboardHeaderIcon}
                    src={settingsIcon} alt="settings"
                    onClick={() => setActiveChild(2)}
                />
                <img
                    className={`${activeChild === 3 ? styles.dashboardHeaderIconActive : ''} ` + styles.dashboardHeaderIcon}
                    src={logoutIcon} alt="logout"
                    onClick={() => setActiveChild(3)}
                />
            </nav>
            <div className={styles.dashboardContent}>
                {selectDashboardChild(activeChild)}
            </div>
        </div>

    );
}
