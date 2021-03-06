import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DisplayDataComponent } from './pages/display-data/display-data.component';
import {DxDataGridModule, DxFormModule, DxGalleryModule} from 'devextreme-angular';
import { SchoolComponent } from './pages/school/school.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import {MyLayoutModule} from './shared/business/my-layout/my-layout.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {MyListModule} from './shared/business/my-list/my-list.module';

const routes: Routes = [
  {
    path: 'pages/teacher',
    component: TeacherComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'pages/school',
    component: SchoolComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'display-data',
    component: DisplayDataComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home',
    canActivate: [ AuthGuardService ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DxDataGridModule,
    DxFormModule,
    MyLayoutModule,
    FlexLayoutModule,
    CommonModule,
    MyListModule,
    DxGalleryModule
  ],
  exports: [RouterModule],
  providers: [AuthGuardService],
  declarations: [
    HomeComponent,
    ProfileComponent,
    DisplayDataComponent,
    SchoolComponent,
    TeacherComponent
  ]
})
export class AppRoutingModule { }
