import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PruebaComponent } from './prueba/prueba/prueba.component';

export const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: '', component: DashboardComponent},
    {path: 'prueba', component: PruebaComponent}
];
