import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { InputProfileComponent } from '../input-profile/input-profile.component';
import { ProfileService } from '../profile.service';

@NgModule({
  declarations: [
    ProfileComponent,
    InputProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProfileComponent,
    InputProfileComponent
  ],
  providers:[ProfileService]
})
export class ProfileModule { }
