import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Trip} from "../model/Trip.ts";
import {TripTag} from "../model/TripTag.ts";


export interface TripState {
    trips: Trip[],
    status: string,
    error: Error | null
}

const initialState: TripState = {
    trips: [],
    status: "idle",
    error: null
}


export const tripSlice = createSlice({
    name: "trip",
    initialState,
    reducers: {
        setTrips: (state, action: PayloadAction<Trip[]>) => {
            state.trips = action.payload
        },
    }
})


export const {setTrips} = tripSlice.actions;

/**
 * Custom selector to filter trips by tags. If no tags are selected, all trips are returned.
 * @param state TripState - the current state
 * @param tags TripTag[] - the tags to filter by
 */
export const selectTripsByTags = (state: TripState, tags: TripTag[]) =>
    state.trips.filter(trip => tags.every(tag => trip.tags.includes(tag)));

/**
 * Custom selector to find a trip by its id.
 * @param state TripState - the current state
 * @param tripId string - the id of the trip to find
 */
export const findTripById = (state: TripState, tripId: string) => state.trips.find(trip => trip.id == tripId);
