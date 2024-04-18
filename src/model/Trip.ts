import {TripTag} from "./TripTag.ts";

export interface Trip {
    id: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    author: string;
    tags: TripTag[];
    latitude: number;
    longitude: number;
}
