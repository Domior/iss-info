import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { API_ISS_CREW } from '../../constants/api';
import { setPhoto } from '../../utils/setPhotos';

export const fetchCrew = createAsyncThunk('crew/fetchCrew', async () => {
  const { data } = await axios.get(API_ISS_CREW);
  return data.people;
});

const initialState = {
  crew: [],
  amount: 0,
  status: 'loading',
};

export const crewSlice = createSlice({
  name: 'crew',
  initialState,
  reducers: {
    setCrew(state, action) {
      state.crew = action.payload.filter(person => person.craft === 'ISS');
      setPhoto(state.crew);
    },
    setCrewAmount(state) {
      state.amount = state.crew.length;
    },
  },
  extraReducers: {
    [fetchCrew.pending]: state => {
      state.crew = [];
      state.status = 'loading';
    },
    [fetchCrew.fulfilled]: (state, action) => {
      state.crew = action.payload.filter(person => person.craft === 'ISS');
      setPhoto(state.crew);
      state.amount = state.crew.length;
      state.status = 'success';
    },
    [fetchCrew.rejected]: state => {
      state.crew = [];
      state.status = 'error';
    },
  },
});

export const { setCrew, setCrewAmount } = crewSlice.actions;

export default crewSlice.reducer;
