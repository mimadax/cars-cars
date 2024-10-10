import { Routes } from '@angular/router';
import { TableauComponent } from './components/tableau/tableau.component';
import { AddCarComponent } from './components/add-car/add-car.component';

export const routes: Routes = [
  { path: '', component: TableauComponent },
  { path: 'add', component: AddCarComponent }
];