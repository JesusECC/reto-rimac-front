import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { TallerComponent } from './talleres/taller.component';
import { ModalvehiculoComponent } from './talleres/modalvehiculo/modalvehiculo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TallerComponent,
    ModalvehiculoComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class componentsModule { }
