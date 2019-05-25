import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBaseListComponent } from './my-base-list/my-base-list.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [MyBaseListComponent],
  exports: [
    MyBaseListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class MyListModule { }
