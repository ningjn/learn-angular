import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBoxComponent } from './my-box/my-box.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [MyBoxComponent],
  exports: [
    MyBoxComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class MyLayoutModule { }
