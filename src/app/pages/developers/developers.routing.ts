import { Routes } from '@angular/router';

import { FormDeveloperComponent } from './form-developer/form-developer.component'
import { ListDevelopersComponent } from './list-developers/list-developers.component'
import { DetailsDeveloperComponent } from './details-developer/details-developer.component';

export const DeveloperRoutes: Routes = [
  {
    path: 'list',
    component: ListDevelopersComponent,
    data: {
      action: 'Listar'
    }
  },
  {
    path: 'create',
    component:FormDeveloperComponent,
    data: {
      action: 'criar'
    }
  },
  {
    path: ':idDeveloper/edit',
    component: FormDeveloperComponent,
    data: {
      action: 'editar'
    }
  },
  {
    path: ':idDeveloper/details',
    component: DetailsDeveloperComponent,
    data: {
      action: 'vizualizar'
    }
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
]
