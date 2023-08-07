import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profile_list : any[]= []

  constructor(private profileService : ProfileService){
    this.profile_list = this.profileService.getProfile();
  }
}
