import {ActionReducerMapBuilder, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {searchTrips} from "./tripSlice.ts";


export interface LoadingState {
    /**
     *   Object lookup as a Map serialization alternative
     */
    loadingStatusMap: { [key: string]: boolean };

    /**
     * Global loading status based on the loading status of all callers.
     * If true, the loader will be displayed with an overlay to prevent user interaction.
     */
    globalLoadingStatus: boolean;
}

export interface SetLoadingStatusPayload {
    callerId: string;
    status: boolean;
}

const initialState: LoadingState = {
    loadingStatusMap: {},
    globalLoadingStatus: false
}

const addLoadingKey = (callerId: string, state: LoadingState) => {
    state.loadingStatusMap[callerId] = true;
    state.globalLoadingStatus = true;
}

const removeLoadingKey = (callerId: string, state: LoadingState) => {
    delete state.loadingStatusMap[callerId];
    state.globalLoadingStatus = Object.keys(state.loadingStatusMap).length > 0;
}

/**
 * Slice for managing the loading status of the application
 */
export const loadingSlice = createSlice({
    name: "loading",
    initialState,
    reducers: {
        /**
         * Set the loading status for a specific caller, and update the global loading status based on the loading status of all callers
         * @param state LoadingState - the current state
         * @param action PayloadAction<SetLoadingStatusPayload> - the callerId and the loading status to set for the caller
         */
        setLoadingStatus: (state, action: PayloadAction<SetLoadingStatusPayload>) => {
            //reproduce a Map but as object lookup
            action.payload.status ? state.loadingStatusMap[action.payload.callerId] = true : delete state.loadingStatusMap[action.payload.callerId];
            state.globalLoadingStatus = Object.keys(state.loadingStatusMap).length > 0;
        }
    },
    extraReducers(builder) {
        addSearchTripCases(builder)
    }
});

export const {setLoadingStatus} = loadingSlice.actions;


/**
 * Add the searchTrips thunk cases to the builder
 * @param builder
 */
const addSearchTripCases = (builder: ActionReducerMapBuilder<LoadingState>) => {
    return builder
        .addCase(searchTrips.pending, (state) => {
            addLoadingKey("searchTrips", state);
        })
        .addCase(searchTrips.fulfilled, (state) => {
            removeLoadingKey("searchTrips", state);
        })
        .addCase(searchTrips.rejected, (state) => {
            removeLoadingKey("searchTrips", state);
        })
}
