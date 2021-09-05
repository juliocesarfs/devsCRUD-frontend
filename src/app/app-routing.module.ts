import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { DeveloperRoutes } from './pages/developers/developers.routing';


export const routes: Routes = [
  ...DeveloperRoutes
]

export const AppRoutingModule: ModuleWithProviders<any> = RouterModule.forRoot(routes)
