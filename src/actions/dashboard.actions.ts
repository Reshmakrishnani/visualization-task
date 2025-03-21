import { createAction, props } from '@ngrx/store';

export const loadData = createAction('[Dashboard] Load Data');
export const loadDataSuccess = createAction('[Dashboard] Load Data Success', props<{ data: any }>());
export const loadDataFailure = createAction('[Dashboard] Load Data Failure', props<{ error: string }>());

export const setSelectedMetric = createAction('[Dashboard] Set Selected Metric', props<{ metric: string }>());
export const setVisualizationType = createAction('[Dashboard] Set Visualization Type', props<{ visualizationType: string }>());
