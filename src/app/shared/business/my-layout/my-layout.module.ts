import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBoxComponent } from './my-box/my-box.component';

@NgModule({
  declarations: [MyBoxComponent],
  exports: [
    MyBoxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MyLayoutModule { }
