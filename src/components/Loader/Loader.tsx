import styles from "./Loader.module.scss";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";

export interface LoaderProps {
    loadingStatus: boolean;
}

/**
 * Loader component, dependent on the global loading status.
 * If the global loading status is true, the loader will be displayed with an overlay to prevent user interaction.
 */
export function Loader() {

    const loadingStatus = useSelector((state: RootState) => state.loading.globalLoadingStatus);
    return (
        <>
            {loadingStatus && (
                <>
                    <div className={styles.loaderOverlay}></div>
                    <span className={styles.loader}></span>
                </>
            )}
        </>
    );
}