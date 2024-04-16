import styles from './Dashboard.module.scss';
import menuIcon from '../../assets/menu.svg';
import messageIcon from '../../assets/message-text.svg';
import settingsIcon from '../../assets/settings.svg';
import logoutIcon from '../../assets/log-out.svg';
import {ReactNode, useCallback, useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

enum ActiveDashboardChild {
    tripList,
    messages,
    settings,
    logout
}

/*function selectDashboardChild(activeChild: ActiveDashboardChild) {
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
}*/

interface DashboardProps {
    children: ReactNode
}

export default function Dashboard({children}: DashboardProps) {

    const navigate = useNavigate();

    const location = useLocation();

    /**
     * Navigates to the given path
     * @param path route to navigate to
     */
    const onIconSelected = (path: string) => {
        navigate(path);
    }

    /**
     * Gets the active dashboard icon based on location
     */
    const getActiveChild = useCallback(() => {
        switch (location.pathname) {
            case '/dashboard/trips':
                return ActiveDashboardChild.tripList;
            case '/dashboard/messages':
                return ActiveDashboardChild.messages;
            case '/dashboard/settings':
                return ActiveDashboardChild.settings;
            case '/dashboard/logout':
                return ActiveDashboardChild.logout;
            default:
                return ActiveDashboardChild.tripList;
        }
    }, [location])

    const [activeChild, setActiveChild] = useState<ActiveDashboardChild>(0)

    /**
     * Checks the current route and sets the correct icon as active
     */
    useEffect(() => {
        setActiveChild(getActiveChild());
    }, [activeChild, getActiveChild])

    return (
        <div className={styles.dashboard}>
            <nav className={styles.dashboardHeader}>
                <img
                    className={`${activeChild === 0 ? styles.dashboardHeaderIconActive : ''} ` + styles.dashboardHeaderIcon}
                    src={menuIcon} alt="menu"
                    onClick={() => onIconSelected('/dashboard/trips')}
                />
                <img
                    className={`${activeChild === 1 ? styles.dashboardHeaderIconActive : ''} ` + styles.dashboardHeaderIcon}
                    src={messageIcon} alt="messages"
                    onClick={() => onIconSelected('/dashboard/trips')}
                />
                <img
                    className={`${activeChild === 2 ? styles.dashboardHeaderIconActive : ''} ` + styles.dashboardHeaderIcon}
                    src={settingsIcon} alt="settings"
                    onClick={() => onIconSelected('/dashboard/trips')}
                />
                <img
                    className={`${activeChild === 3 ? styles.dashboardHeaderIconActive : ''} ` + styles.dashboardHeaderIcon}
                    src={logoutIcon} alt="logout"
                    onClick={() => onIconSelected('/dashboard/trips')}
                />
            </nav>
            <div className={styles.dashboardContent}>
                {children}
            </div>
        </div>

    );
}
