import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState } from '../store/dashboard.reducer';

export const selectDashboardState = createFeatureSelector<DashboardState>('dashboard');

export const selectSelectedCountry = createSelector(
    selectDashboardState,
    (state) => state.selectedCountry
);

export const selectAllIntegrations = createSelector(
    selectDashboardState,
    (state) => state.integrations
);