import styles from './TripsMenu.module.scss';
import {useEffect, useState} from "react";

export function TripsMenu() {

    /**
     * Search bar input
     */
    const [search, setSearch] = useState('');
    /**
     * Debounced search input
     */
    const [debouncedSearch, setDebouncedSearch] = useState('');

    useEffect(() => {
        const typingTimeout = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500);

        return () => {
            clearTimeout(typingTimeout);
        }
    }, [search]);

    const resetSearch = () => {
        setSearch('');
    };

    return (
        <>
            <div className={styles.trips}>
                <header className={styles.tripHeader}>
                    <h2>Trip List</h2>
                    <div className={styles.tripsHeaderSearch}>
                        <div className={styles.tripsHeaderSearch}>
                            <input className={styles.tripsHeaderSearchInput} type="text" placeholder="Search"
                                   value={search}
                                   onChange={e => setSearch(e.target.value)}/>
                            {search &&
                                <button className={styles.tripsHeaderSearchReset} onClick={resetSearch}>X</button>}
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
}
