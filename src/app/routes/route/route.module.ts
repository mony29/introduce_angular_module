import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { CourseComponent } from '../course/course.component';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFounddComponent } from '../page-not-foundd/page-not-foundd.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    CourseComponent,
    PageNotFounddComponent
  ],
  imports: [
    CommonModule, 
    RouterModule
  ],
  exports: [
    HomeComponent,
    AboutUsComponent,
    CourseComponent,
    RouterModule
  ]
})
export class RouteModule { }
