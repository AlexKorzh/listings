import {RootState} from "../store.ts";
import { api } from '../../api';

export const getAllListings = (state: RootState) => api.endpoints?.getAllListings.select({})(state).data;
export const getListingsByAddress = (state: RootState) => api.endpoints?.getListingsByAddress.select({})(state).data;