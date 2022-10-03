import { useMemo } from 'react';
import axios from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'store';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { Status } from 'store/types';
import { API_URL } from "config/constants";


export type UserType = Partial<{
    id: number;
    email: string;
    gender: number;
    country: string;
    last_name: string;
    first_name: string;
    avatar: string;
    address: Partial<{
        city: string;
        country: string;
        street_address: string;
    }>
}>;

export type UsersPagedData = Array<UserType>

/**
 * Paged Users types
 */


export type UsersPagedActions = {
    read: (count: number) => void;
};

export interface UsersPagedState {
    status: Status;
    data: UsersPagedData;
}

/**
 * Paged Users initial state
 */
const initialState: UsersPagedState = {
    data: [],
    status: 'idle',
};

/**
 * Paged Users Async thunk
 */
const readUsersPaged = createAsyncThunk('usersPaged/read', async (count: number) => {
    return await axios.get(`${API_URL}${count}`).then((res) => res.data )
});

/**
 * Paged Users slice
 */
export const UsersPagedSlice = createSlice({
    name: 'UsersPaged',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(readUsersPaged.pending, (state: UsersPagedState): void => {
                state.status = 'loading';
            })
            .addCase(
                readUsersPaged.fulfilled,
                (state: UsersPagedState, action: PayloadAction<UsersPagedData>): void => {
                    state.status = 'success';
                    state.data = action.payload
                }
            )
            .addCase(readUsersPaged.rejected, (state: UsersPagedState): void => {
                state.status = 'failed';
                state.data = initialState.data;
            });
    },
});

/**
 * Paged Users hooks
 */
export const useUsersPaged = (): [UsersPagedState, UsersPagedActions] => {
    const dispatch = useAppDispatch();
    const reducerState = useAppSelector((state: RootState) => state.users);

    const reducerActions: UsersPagedActions = useMemo(
        () => ({
            read: (count: number) => {
                dispatch(readUsersPaged(count));
            },
        }),
        [dispatch]
    );

    return [reducerState, reducerActions];
};

export default UsersPagedSlice.reducer;

