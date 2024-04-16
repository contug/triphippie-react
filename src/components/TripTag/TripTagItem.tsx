import styles from './TripTagItem.module.scss';
import {TripTag} from "../../model/TripTag.ts";

export interface TripTagProps {
    tripTag: TripTag;
}

export function TripTagItem({tripTag}: TripTagProps) {
    return (
        <span className={styles.tag}>
                {tripTag.name}
            </span>
    );
}
