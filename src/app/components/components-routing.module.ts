import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TallerComponent } from './talleres/taller.component';


const routes: Routes = [
  {
    path: 'talleres',
    children: [
      {
        path: '',
        component: TallerComponent,
        data: {
          title: "Buscar-taller",
          breadcrumb: "Buscar-taller"
        }
      },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
