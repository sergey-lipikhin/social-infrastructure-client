/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Experiment } from '@cutomTypes/experiment';

interface StateType {
  experiments: Experiment[];
}

const initialState: StateType = {
  experiments: [],
};

const experimentSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setExperiments: (state, action: PayloadAction<Experiment[]>) => {
      state.experiments = action.payload;
    },
    deleteExperiment: (state, action: PayloadAction<number>) => {
      state.experiments = state.experiments.filter(experiment => (
        experiment.id !== action.payload
      ));
    },
    addExperiment: (state, action: PayloadAction<Experiment>) => {
      state.experiments = [...state.experiments, action.payload];
    },
  },
});

export const {
  setExperiments,
  deleteExperiment,
  addExperiment,
} = experimentSlice.actions;

export default experimentSlice.reducer;
