import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Trip} from "../model/Trip.ts";
import {TripTag} from "../model/TripTag.ts";
import axios from "axios";
import baseUrl from "../env.params.ts";


export interface TripState {
    trips: Trip[],
    status: string,
    error: any
}

const initialState: TripState = {
    trips: [],
    status: "idle",
    error: null
}


export const tripSlice = createSlice({
    name: "trip",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(searchTrips.fulfilled, (state, action) => {
                state.trips = action.payload;
            })
    }
})


export const {} = tripSlice.actions;

/**
 * Custom selector to filter trips by tags. If no tags are selected, all trips are returned.
 * @param state TripState - the current state
 * @param tags TripTag[] - the tags to filter by
 */
export const selectTripsByTags = (state: TripState, tags: TripTag[]) =>
    state.trips.filter(trip => tags.every(tag => trip.tags.includes(tag)));


export const searchTrips = createAsyncThunk('trip/searchTrips', async () => {
    try {
        const response = await axios.get<Trip[]>(baseUrl + "/trips");
        return response.data;
    } catch (error) {
        console.error("Error fetching trips: ", error);
        throw error;
    }

})
