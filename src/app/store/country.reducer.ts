import { createReducer, on } from '@ngrx/store';
import { Country } from '../interfaces/types';
import * as CountryActions from './country.actions';

export interface CountryState {
    selectedCountry: Country | null;
}

export const initialState: CountryState = {
    selectedCountry: null
};

export const countryReducer = createReducer(
    initialState,
    on(CountryActions.selectCountry, (state, { country }) => ({
        ...state,
        selectedCountry: country
    }))
);