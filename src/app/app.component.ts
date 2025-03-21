import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { dashboardReducer } from '../reducer/dashboard.reducers';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 constructor(){
  console.log('dshhduhudsu');
 }

}
