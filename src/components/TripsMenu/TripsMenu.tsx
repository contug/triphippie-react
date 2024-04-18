import styles from './TripsMenu.module.scss';
import {useEffect, useState} from "react";
import {useGetAllTripsQuery} from "../../services/apiSlice.ts";
import {TripList} from "../TripList/TripList.tsx";
import Loader from "../Loader/Loader.tsx";
import {useAppDispatch} from "../../hooks/redux-hooks.ts";
import {setTrips} from "../../store/tripSlice.ts";

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

    const {data, isFetching, isSuccess} = useGetAllTripsQuery(debouncedSearch);

    const dispatch = useAppDispatch();

    // sets trips in the store if the search is empty --> fetching all trips
    if (isSuccess && debouncedSearch === '') {
        dispatch(setTrips(data || []))
    }

    const resetSearch = () => {
        setSearch('');
    };

    return (
        <>
            <div className={styles.trips}>
                <header className={styles.tripHeader}>
                    <h2>Trips</h2>
                    <div className={styles.tripsHeaderSearch}>
                        <div className={styles.tripsHeaderSearch}>
                            <input className={styles.tripsHeaderSearchInput} type="text" placeholder="Search"
                                   value={search}
                                   onChange={e => setSearch(e.target.value)}/>
                            {search &&
                                <button className={styles.tripsHeaderSearchReset} onClick={resetSearch}
                                        tabIndex={0}>X</button>}
                        </div>
                    </div>
                </header>
                <Loader staticLoadingStatus={isFetching} isFullPage={false}/>
                {!isFetching && <TripList trips={data || []}/>}
            </div>
        </>
    );
}
