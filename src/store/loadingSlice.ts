import {createSlice, PayloadAction} from "@reduxjs/toolkit";


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
    }
});

export const {setLoadingStatus} = loadingSlice.actions;
