import { createReducer, on } from '@ngrx/store';
import * as DashboardActions from './dashboard.actions';
import { Integration } from '../interfaces/dashboardData';

export interface DashboardState {
    selectedCountry: string;
    integrations: Integration[];
    loading: boolean;
    error: string | null;
}

export const initialState: DashboardState = {
    selectedCountry: 'USA',
    integrations: [],
    loading: false,
    error: null
};

export const dashboardReducer = createReducer(
    initialState,
    on(DashboardActions.setSelectedCountry, (state, { country }) => ({
        ...state,
        selectedCountry: country
    })),
    on(DashboardActions.loadIntegrationsSuccess, (state, { integrations }) => ({
        ...state,
        integrations
    }))
);