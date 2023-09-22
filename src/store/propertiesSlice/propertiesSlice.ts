import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {IProperty} from "../../types";

type PropertiesState = IProperty[];

const initialState: PropertiesState = [];

export const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    setProperties: (_, action: PayloadAction<PropertiesState>) => {
      return action.payload;
    },
  },
});

export const { setProperties } = propertiesSlice.actions;
