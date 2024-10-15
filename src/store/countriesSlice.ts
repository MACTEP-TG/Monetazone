import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {countries} from "@/utils/countries.ts";

type CountryType = {
    name: string,
    flagSVG: string,
    cities: string [],
    currencies: string [],
    issue: boolean,
    intake: boolean

}

interface countriesState {
    currentCountries: CountryType []
}

const initialState: countriesState = {
    currentCountries: countries
}

const countriesSlice = createSlice({
    name: 'countriesSlice',
    initialState,
    reducers: {
        updateCurrentCountries: (state: countriesState, action: PayloadAction<CountryType []>) => {
            state.currentCountries = action.payload
        }
    }
})

export const {updateCurrentCountries} = countriesSlice.actions;

export const countriesReducer = countriesSlice.reducer;
