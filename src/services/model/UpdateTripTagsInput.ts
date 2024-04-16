import {TripTag} from "../../model/TripTag.ts";

export interface UpdateTripTagsInput {
    tripId: number;
    tags: TripTag[];
}
