import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { DialogComponent } from './dialog/dialog.component';

export const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent}
    {path: '', component: DashboardComponent}
   // {path: 'dialog', component: DialogComponent }
];
