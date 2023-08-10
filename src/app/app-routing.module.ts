import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './routes/home/home.component';
import { AboutUsComponent } from './routes/about-us/about-us.component';
import { CourseComponent } from './routes/course/course.component';
import { Routes, RouterModule} from '@angular/router'
import { PageNotFounddComponent } from './routes/page-not-foundd/page-not-foundd.component';


const appRoutes : Routes = [
  {
    path: '', component: HomeComponent  // 1st way
    // path: '', redirectTo: 'home', pathMatch: 'full'  // 2nd way
  },
  { path: 'home', component: HomeComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'course', component: CourseComponent},
  { path: '**', component: PageNotFounddComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
