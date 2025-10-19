import { Routes } from '@angular/router';
import { Carroslist } from './components/carroslist/carroslist';
import { Dashboard } from './components/dashboard/dashboard';

export const routes: Routes = [
    {path: "", redirectTo: "dashboard", pathMatch: "full"},
    {path: "carros", component: Carroslist},
    {path: "dashboard", component: Dashboard}
];
