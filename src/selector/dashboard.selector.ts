import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState } from '../reducer/dashboard.reducers';

export const selectDashboardState = createFeatureSelector<DashboardState>('dashboard');

export const selectDashboardData = createSelector(
  selectDashboardState,
  (state:DashboardState) => state.data
);
