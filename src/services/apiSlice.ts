import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import baseUrl from "../env.params.ts";
import {Trip} from "../model/Trip.ts";
import {UpdateTripTagsInput} from "./model/UpdateTripTagsInput.ts";


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl
    }),
    endpoints: builder => ({
        getAllTrips: builder.query<Trip[], string>({
            query: (searchString) => ({
                url: '/trip/search' + (searchString !== '' ? `?query=${searchString}` : ''),
                method: 'GET',
            })
        }),
        getTripById: builder.query<Trip, number>({
            query: (id: number) => ({
                url: `/trip?id=${id}`,
                method: 'GET'
            })
        }),


        addNewTrip: builder.mutation<Trip, Trip>({
            query: (trip: Trip) => ({
                url: '/trip',
                method: 'POST',
                body: trip
            }),
        }),
        updateTripTags: builder.mutation<Trip[], UpdateTripTagsInput>({
            query: (input: UpdateTripTagsInput) => ({
                url: `/trip?id=${input.tripId}/tags`,
                method: 'PUT',
                body: input.tags
            })
        })
    }),
})

export const {useGetAllTripsQuery, useAddNewTripMutation} = apiSlice;
