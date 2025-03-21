import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DashboardState } from '../reducer/dashboard.reducers';
import * as DashboardActions from '../actions/dashboard.actions';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-dashboard',
  standalone:true,
  imports:[MatFormFieldModule,MatSelectModule,NgxChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data$: Observable<any>;
  selectedMetric$: Observable<string>;
  visualizationType$: Observable<string>;

  constructor(private store: Store<{ dashboard: DashboardState }>) {
    this.data$ = store.pipe(select('dashboard', 'data'));
    this.selectedMetric$ = store.pipe(select('dashboard', 'selectedMetric'));
    this.visualizationType$ = store.pipe(select('dashboard', 'visualizationType'));
  }

  ngOnInit(): void {
    this.store.dispatch(DashboardActions.loadData());
  }

  onMetricChange(metric: string): void {
    this.store.dispatch(DashboardActions.setSelectedMetric({ metric }));
  }

  onVisualizationChange(visualizationType: string): void {
    this.store.dispatch(DashboardActions.setVisualizationType({ visualizationType }));
  }
}
