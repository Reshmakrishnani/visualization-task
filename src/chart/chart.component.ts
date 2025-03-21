import { Component, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class NgxChartComponent {
  @Input() data: any=[];
  colorScheme =  ['#5AA454', '#A10A28', '#C7B42C'] ;
}
