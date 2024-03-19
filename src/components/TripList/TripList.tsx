import styles from './TripList.module.scss';
import {useEffect, useState} from "react";

export function TripList() {

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
            <div className={styles.tripList}>
                <header className={styles.tripListHeader}>
                    <h2>Trip List</h2>
                    <div className={styles.tripListHeaderSearch}>
                        <div className={styles.tripListHeaderSearch}>
                            <input className={styles.tripListHeaderSearchInput} type="text" placeholder="Search"
                                   value={search}
                                   onChange={e => setSearch(e.target.value)}/>
                            {search &&
                                <button className={styles.tripListHeaderSearchReset} onClick={resetSearch}>X</button>}
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
}
