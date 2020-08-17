import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilabancoComponent } from '../filabanco/filabanco/filabanco.component';



@NgModule({
  declarations: [FilabancoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FilabancoComponent
  ]
})
export class HomeModule { }
