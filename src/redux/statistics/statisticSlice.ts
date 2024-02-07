import { createSlice } from "@reduxjs/toolkit";

type Statistics = {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
};

type InitialState = {
  statistics: Statistics[];
  isLoading: boolean;

  error: boolean;
};

const initialState: InitialState = {
  statistics: [],
  isLoading: false,

  error: false,
};
const statisticSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    getStatisticsPending: (state) => {
      state.isLoading = true;
    },
    getStatisticsSuccess: (state, action) => {
      state.isLoading = false;
      state.statistics.push(action.payload);
    },
    getStatisticsFailure: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const {
  getStatisticsPending,
  getStatisticsSuccess,
  getStatisticsFailure,
} = statisticSlice.actions;
export default statisticSlice.reducer;
