import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { API_ISS_LOCATION } from '../../constants/api';

export const fetchLocation = createAsyncThunk('location/fetchLocation', async () => {
  const { data } = await axios.get(API_ISS_LOCATION);
  return data;
});

const initialState = {
  coordinates: [0, 0],
  timestamp: 0,
  status: 'loading',
};

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation(state, action) {
      state.coordinates = action.payload;
    },
  },
  extraReducers: {
    [fetchLocation.pending]: state => {
      state.status = 'loading';
    },
    [fetchLocation.fulfilled]: (state, action) => {
      state.coordinates = [
        +action.payload.iss_position.longitude,
        +action.payload.iss_position.latitude,
      ];
      state.timestamp = action.payload.timestamp;
      state.status = 'success';
    },
    [fetchLocation.rejected]: state => {
      state.coordinates = [0, 0];
      state.status = 'error';
    },
  },
});

export const { setLocation } = locationSlice.actions;

export default locationSlice.reducer;
