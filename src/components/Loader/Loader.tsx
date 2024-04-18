import styles from "./Loader.module.scss";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";

export interface LoaderProps {
    /**
     * Optional prop to set the loading status statically. If false, the global loading status will be used from the store.
     */
    staticLoadingStatus?: boolean;
    isFullPage?: boolean;
}

/**
 * Loader component, dependent on the global loading status.
 * If the global loading status is true, the loader will be displayed with an overlay to prevent user interaction.
 */
export default function Loader({staticLoadingStatus = false, isFullPage = true}: LoaderProps) {

    const globalLoadingStatus = useSelector((state: RootState) => state.loading.globalLoadingStatus);

    const loadingStatus = staticLoadingStatus ? true : globalLoadingStatus
    return (
        <>
            {loadingStatus && (
                <>
                    {isFullPage && <div
                        className={styles.loaderOverlay}
                        data-testid="loader-overlay"
                    ></div>}
                    <span
                        className={styles.loader}
                        data-testid="loader"
                    ></span>
                </>
            )}
        </>
    );
}
