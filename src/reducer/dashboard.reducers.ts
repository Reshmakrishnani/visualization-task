import { createReducer, on } from '@ngrx/store';
import * as DashboardActions from '../actions/dashboard.actions';

export interface DashboardState {
  data: any;
  selectedMetric: string;
  visualizationType: string;
}

export const initialState: DashboardState = {
  data: null,
  selectedMetric: 'salesData',
  visualizationType: 'bar'
};

export const dashboardReducer = createReducer(
  initialState,
  on(DashboardActions.loadDataSuccess, (state, { data }) => ({ ...state, data })),
  on(DashboardActions.setSelectedMetric, (state, { metric }) => ({ ...state, selectedMetric: metric })),
  on(DashboardActions.setVisualizationType, (state, { visualizationType }) => ({ ...state, visualizationType: visualizationType }))
);
